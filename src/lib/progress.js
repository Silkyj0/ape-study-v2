import { SEED, SEED_VERSION } from '../data/questions.js';
import { DAY_MS, getLearningTopic, masteryState } from './learning.js';

// Retained for backwards compatibility with older imports/data exports.
export const INTERVALS = [0, 1, 3, 7, 14];
export { DAY_MS };

export function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function learningProgress(prior, fallback = {}) {
  return {
    level: prior ? (prior.level ?? 0) : 0,
    due: prior ? (prior.due ?? 0) : 0,
    seen: prior ? (prior.seen ?? 0) : 0,
    correctCount: prior ? (prior.correctCount ?? 0) : 0,
    // null distinguishes historical progress whose consecutive-answer streak
    // cannot be reconstructed from aggregate counts. The first new answer will
    // start a real streak without falsely snoozing an old question.
    correctStreak: prior ? (prior.correctStreak ?? null) : 0,
    lapseCount: prior ? (prior.lapseCount ?? 0) : 0,
    recentResults: prior?.recentResults || [],
    recentConfidence: prior?.recentConfidence || [],
    lowConfidenceCount: prior?.lowConfidenceCount || 0,
    lastResult: prior?.lastResult ?? null,
    lastConfidence: prior?.lastConfidence ?? null,
    lastConfidenceAt: prior?.lastConfidenceAt || null,
    lastAnsweredAt: prior?.lastAnsweredAt || null,
    learningTopic: prior?.learningTopic || fallback.learningTopic || null,
  };
}

export function reconcile(stored = { questions: [] }) {
  const priorBySeedId = new Map();
  (stored.questions || []).forEach((q) => {
    if (q.seedId) priorBySeedId.set(q.seedId, q);
  });

  const userQuestions = (stored.questions || [])
    .filter((q) => !q.seedId && q.source === 'From your notes')
    .map((q) => ({
      ...q,
      difficulty: q.difficulty || 'unrated',
      status: q.status || (q.correct === null || q.correct === undefined ? 'pending' : 'ready'),
      qaStatus: q.qaStatus || 'user-added',
      qaLabel: q.qaLabel || 'User-added',
      qaNote: q.qaNote || 'Manually added question. Verify against the source material you used to create it.',
      flagged: Boolean(q.flagged),
      flaggedAt: q.flaggedAt || null,
      ...learningProgress(q, { learningTopic: getLearningTopic(q) }),
    }));

  const seedQuestions = SEED.map((q) => {
    const prior = priorBySeedId.get(q.id);
    const base = {
      id: prior ? prior.id : uid(),
      seedId: q.id,
      moduleId: q.module,
      scenarioText: q.scenarioText || null,
      prompt: q.prompt,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation,
      source: q.source || 'AI-drafted — verify against your notes',
      difficulty: q.difficulty || prior?.difficulty || 'unrated',
      status: q.correct === null || q.correct === undefined ? 'pending' : 'ready',
      qaStatus: q.qaStatus || 'unknown',
      qaLabel: q.qaLabel || 'Unknown',
      qaNote: q.qaNote || '',
      flagged: prior ? Boolean(prior.flagged) : false,
      flaggedAt: prior?.flaggedAt || null,
    };
    const learningTopic = getLearningTopic({ ...q, moduleId: q.module });
    return {
      ...base,
      ...learningProgress(prior, { learningTopic }),
      learningTopic,
    };
  });

  return {
    seedVersion: SEED_VERSION,
    questions: [...seedQuestions, ...userQuestions],
    examHistory: Array.isArray(stored.examHistory) ? stored.examHistory.slice(-20) : [],
  };
}

export function moduleStats(questions, moduleId) {
  const all = questions.filter((q) => q.moduleId === moduleId);
  const ready = all.filter((q) => q.status === 'ready');
  const pending = all.length - ready.length;
  const now = Date.now();
  const due = ready.filter((q) => q.seen > 0 && q.due <= now).length;
  const newCount = ready.filter((q) => !q.seen).length;
  const seen = ready.filter((q) => q.seen > 0);
  const attempts = seen.reduce((sum, q) => sum + q.seen, 0);
  const correct = seen.reduce((sum, q) => sum + q.correctCount, 0);
  const accuracy = attempts ? Math.round((correct / attempts) * 100) : null;
  const mastered = ready.filter((q) => masteryState(q) === 'mastered').length;
  const learning = ready.filter((q) => masteryState(q) === 'learning').length;
  const weak = ready.filter((q) => {
    const recent = q.recentResults || [];
    const recentAccuracy = recent.length ? recent.filter(Boolean).length / recent.length : null;
    const lowConfidence = (q.recentConfidence || []).filter((value) => value === false).length;
    return q.lastResult === false || lowConfidence >= 2 || (recent.length >= 3 && recentAccuracy < 0.67);
  }).length;

  const masteryPoints = ready.reduce((sum, q) => {
    if (!q.seen) return sum;
    if (Number.isFinite(q.correctStreak)) return sum + Math.min(q.correctStreak, 3) / 3;
    return sum + Math.min(q.level || 0, 5) / 5;
  }, 0);

  return {
    total: ready.length,
    pending,
    due,
    newCount,
    learning,
    mastered,
    weak,
    accuracy,
    mastery: ready.length ? Math.round((masteryPoints / ready.length) * 100) : 0,
  };
}
