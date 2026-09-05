export const HOUR_MS = 60 * 60 * 1000;
export const DAY_MS = 24 * HOUR_MS;
export const MODULE_SESSION_LIMIT = 20;
export const MIXED_SESSION_LIMIT = 25;
export const FOCUS_SESSION_LIMIT = 15;
export const SAME_SESSION_RETRY_GAP = 5;
export const MAX_SAME_SESSION_RETRIES = 2;
export const RECENT_RESULT_LIMIT = 8;

const STREAK_INTERVAL_DAYS = [1, 3, 7, 14];

function shuffleCopy(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normaliseSource(source) {
  return String(source || '')
    .replace(/^Acumen\s*[—-]\s*/i, '')
    .replace(/\.pdf$/i, '')
    .trim();
}

const TOPIC_RULES = [
  [/warrant|fitness for purpose|contractual liability|client-generated agreement|collateral/i, 'Agreements & professional liability'],
  [/partial services|core architectural services/i, 'Scope & partial services'],
  [/fee|profit|charge-out|low fees|salaries and overhead/i, 'Fees & practice economics'],
  [/project time|time performance/i, 'Project time management'],
  [/quality management|qms|filing|office administration|communications|report writing|email disclaimer/i, 'Practice administration & quality'],
  [/project feasibility|master planning/i, 'Feasibility & project planning'],
  [/dda|disability|access/i, 'Equitable access'],
  [/safe design|whs|work health|safety in design/i, 'Safety in design'],
  [/carbon|embodied|energy|life.?cycle/i, 'Whole-life energy & carbon'],
  [/design and construct/i, 'Design & construct'],
  [/guaranteed maximum|cost-plus/i, 'GMP & cost-plus'],
  [/procurement|alliancing|public private|ppp|fast-tracked/i, 'Procurement methods'],
  [/building contracts|contract preparation/i, 'Contract selection & preparation'],
  [/shop drawings/i, 'Shop drawings'],
  [/construction documentation/i, 'Construction documentation'],
  [/performance solutions/i, 'Performance solutions'],
  [/non-complying building products|building products/i, 'Product compliance'],
  [/tenders - calling|tenders - receiving|tender assessment|tender details|promotion via proposals and tenders/i, 'Tendering & tender evaluation'],
  [/negotiated contracts/i, 'Negotiated tendering'],
  [/contract administration versus supervision|inspections/i, 'CA & site inspections'],
  [/latent conditions|substitution/i, 'Latent conditions & substitutions'],
  [/progress payments|certificates/i, 'Progress payments & certification'],
  [/security|bank guarantees|cash retention/i, 'Security & retention'],
  [/variations to construction scope|variations/i, 'Variations'],
  [/errors, ambiguities or omissions|errors and omissions/i, 'Errors, omissions & contingency'],
  [/extensions of time|eot/i, 'EOTs & delay'],
  [/prevention principle|duty of cooperation/i, 'Prevention principle & cooperation'],
  [/practical completion/i, 'Practical completion'],
  [/defects/i, 'Defects & defects liability'],
  [/liquidated damages/i, 'Liquidated damages'],
  [/final completion|final certificate/i, 'Final certificate'],
  [/termination rights|insolvency/i, 'Termination & insolvency'],
  [/alternative dispute|fee disputes|mediation|arbitration|adjudication/i, 'Dispute resolution'],
];

export function getLearningTopic(question) {
  if (question?.learningTopic) return question.learningTopic;
  if (question?.source === 'From your notes') return 'Your notes';

  const source = normaliseSource(question?.source);
  for (const [pattern, label] of TOPIC_RULES) {
    if (pattern.test(source)) return label;
  }

  if (question?.qaStatus === 'parcs-confirmed') {
    return `Module ${question.moduleId ?? question.module} PARCS samples`;
  }

  return source || `Module ${question?.moduleId ?? question?.module ?? ''}`.trim();
}

export function applyAnswerResult(question, isCorrect, now = Date.now()) {
  const previousStreak = Number.isFinite(question.correctStreak) ? question.correctStreak : 0;
  const correctStreak = isCorrect ? previousStreak + 1 : 0;
  const lapseCount = (question.lapseCount || 0) + (isCorrect ? 0 : 1);
  const recentResults = [...(question.recentResults || []), isCorrect].slice(-RECENT_RESULT_LIMIT);

  let due;
  let level;
  if (isCorrect) {
    const intervalDays = STREAK_INTERVAL_DAYS[Math.min(correctStreak - 1, STREAK_INTERVAL_DAYS.length - 1)];
    due = now + intervalDays * DAY_MS;
    level = Math.min(correctStreak + 1, 5);
  } else {
    // A miss is reinforced again in-session and is also due later the same day.
    due = now + 4 * HOUR_MS;
    level = 0;
  }

  return {
    correctStreak,
    lapseCount,
    recentResults,
    lastResult: isCorrect,
    lastAnsweredAt: now,
    due,
    level,
    seen: (question.seen || 0) + 1,
    correctCount: (question.correctCount || 0) + (isCorrect ? 1 : 0),
  };
}

function recentAccuracy(question) {
  const recent = question.recentResults || [];
  if (recent.length) return recent.filter(Boolean).length / recent.length;
  if (question.seen > 0) return (question.correctCount || 0) / question.seen;
  return 1;
}

export function questionPriority(question, now = Date.now()) {
  if (!question.seen) return 0;
  const accuracy = recentAccuracy(question);
  const overdueDays = Math.max(0, now - (question.due || 0)) / DAY_MS;
  return (
    (question.lastResult === false ? 100 : 0)
    + (1 - accuracy) * 60
    + Math.min(question.lapseCount || 0, 5) * 6
    + Math.min(overdueDays, 14) * 2
    - Math.min(Number.isFinite(question.correctStreak) ? question.correctStreak : 0, 4) * 4
  );
}

export function buildAdaptiveSession(questions, limit = MODULE_SESSION_LIMIT, now = Date.now()) {
  const ready = questions.filter((q) => q.status === 'ready');
  const dueReview = ready
    .filter((q) => q.seen > 0 && (q.due || 0) <= now)
    .sort((a, b) => questionPriority(b, now) - questionPriority(a, now));

  const selected = dueReview.slice(0, limit);
  if (selected.length < limit) {
    const unseen = shuffleCopy(ready.filter((q) => !q.seen));
    selected.push(...unseen.slice(0, limit - selected.length));
  }

  return selected;
}

export function buildFocusSession(questions, topic, limit = FOCUS_SESSION_LIMIT, now = Date.now()) {
  const pool = questions
    .filter((q) => q.status === 'ready' && getLearningTopic(q) === topic)
    .map((q) => ({ q, score: questionPriority(q, now) + (!q.seen ? 12 : 0) }))
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.q);

  return pool.slice(0, limit);
}

export function getWeakAreas(questions, limit = 5) {
  const groups = new Map();

  questions.filter((q) => q.status === 'ready' && q.seen > 0).forEach((question) => {
    const topic = getLearningTopic(question);
    if (!groups.has(topic)) groups.set(topic, { topic, attempts: 0, correct: 0, questions: new Set(), recentMisses: 0, repeatedLapses: 0 });
    const group = groups.get(topic);
    const recent = question.recentResults || [];

    if (recent.length) {
      group.attempts += recent.length;
      group.correct += recent.filter(Boolean).length;
      group.recentMisses += recent.filter((result) => !result).length;
    } else {
      group.attempts += question.seen || 0;
      group.correct += question.correctCount || 0;
      group.recentMisses += Math.max(0, (question.seen || 0) - (question.correctCount || 0));
    }

    group.questions.add(question.id);
    if ((question.lapseCount || 0) >= 2) group.repeatedLapses += 1;
  });

  return [...groups.values()]
    .map((group) => {
      const accuracy = group.attempts ? group.correct / group.attempts : 1;
      const score = (1 - accuracy) * 100 + Math.min(group.recentMisses, 6) * 4 + group.repeatedLapses * 8;
      return {
        topic: group.topic,
        attempts: group.attempts,
        accuracy: Math.round(accuracy * 100),
        questionCount: group.questions.size,
        recentMisses: group.recentMisses,
        score,
      };
    })
    .filter((area) => area.attempts >= 3 && (area.accuracy < 80 || area.recentMisses >= 2))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function masteryState(question) {
  const streak = Number.isFinite(question.correctStreak) ? question.correctStreak : null;
  if (!question.seen) return 'new';
  if (streak !== null && streak >= 3) return 'mastered';
  if (streak === null && (question.level || 0) >= 4) return 'mastered';
  return 'learning';
}

export function answerScheduleFeedback(question, isCorrect, repeatedInSession = false) {
  if (!isCorrect) {
    return {
      tone: 'error',
      title: repeatedInSession ? 'Retry queued' : 'Needs another pass',
      detail: repeatedInSession
        ? 'This question will reappear after a few other cards, and it is due again later today.'
        : 'This question is due again later today.',
    };
  }

  const streak = question.correctStreak || 1;
  const days = STREAK_INTERVAL_DAYS[Math.min(streak - 1, STREAK_INTERVAL_DAYS.length - 1)];
  return {
    tone: streak >= 3 ? 'mastered' : 'success',
    title: streak >= 3 ? `${streak} correct in a row · snoozed` : `${streak} correct in a row`,
    detail: `Next scheduled review in ${days} day${days === 1 ? '' : 's'}.`,
  };
}
