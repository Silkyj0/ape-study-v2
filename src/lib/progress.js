import { SEED, SEED_VERSION } from '../data/questions.js';

export const DAY_MS = 24 * 60 * 60 * 1000;
export const INTERVALS = [0, 1, 2, 4, 9, 18];

export function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export function reconcile(stored = { questions: [] }) {
  const priorBySeedId = new Map();
  (stored.questions || []).forEach((q) => {
    if (q.seedId) priorBySeedId.set(q.seedId, q);
  });

  const userQuestions = (stored.questions || []).filter(
    (q) => !q.seedId && q.source === 'From your notes',
  );

  const seedQuestions = SEED.map((q) => {
    const prior = priorBySeedId.get(q.id);
    return {
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
      level: prior ? prior.level : 0,
      due: prior ? prior.due : 0,
      seen: prior ? prior.seen : 0,
      correctCount: prior ? prior.correctCount : 0,
    };
  });

  return {
    seedVersion: SEED_VERSION,
    questions: [...seedQuestions, ...userQuestions],
  };
}

export function moduleStats(questions, moduleId) {
  const all = questions.filter((q) => q.moduleId === moduleId);
  const ready = all.filter((q) => q.status === 'ready');
  const pending = all.length - ready.length;
  const now = Date.now();
  const due = ready.filter((q) => q.due <= now).length;
  const seen = ready.filter((q) => q.seen > 0);
  const attempts = seen.reduce((sum, q) => sum + q.seen, 0);
  const correct = seen.reduce((sum, q) => sum + q.correctCount, 0);
  const accuracy = attempts ? Math.round((correct / attempts) * 100) : null;
  const avgLevel = ready.length ? ready.reduce((sum, q) => sum + q.level, 0) / ready.length / 5 : 0;
  return {
    total: ready.length,
    pending,
    due,
    accuracy,
    mastery: Math.round(avgLevel * 100),
  };
}
