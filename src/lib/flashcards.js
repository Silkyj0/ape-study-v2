export const FLASHCARD_SESSION_LIMIT = 20;
export const FLASHCARD_RETRY_GAP = 4;
export const FLASHCARD_MAX_RETRIES = 2;

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;
const KNEW_INTERVAL_DAYS = [1, 3, 7, 14];
const UNSURE_REVIEW_HOURS = 12;
const DIDNT_KNOW_REVIEW_HOURS = 4;
const RECENT_RATING_LIMIT = 8;

function shuffleCopy(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function flashcardMasteryState(card) {
  if (!card.seen) return 'new';
  return (card.correctStreak || 0) >= 3 ? 'mastered' : 'learning';
}

export function flashcardPriority(card, now = Date.now()) {
  if (!card.seen) return 0;
  const overdueDays = Math.max(0, now - (card.due || 0)) / DAY_MS;
  const lastRatingScore = card.lastRating === 'didnt-know' ? 80 : card.lastRating === 'unsure' ? 35 : 0;
  const recentWeak = (card.recentRatings || []).filter((rating) => rating !== 'knew').length;
  return (
    lastRatingScore
    + Math.min(card.lapseCount || 0, 5) * 8
    + Math.min(recentWeak, 6) * 5
    + Math.min(overdueDays, 14) * 2
    - Math.min(card.correctStreak || 0, 4) * 5
  );
}

export function buildFlashcardSession(cards, limit = FLASHCARD_SESSION_LIMIT, moduleId = null, now = Date.now()) {
  const pool = moduleId ? cards.filter((card) => card.moduleId === moduleId) : cards;
  const due = pool
    .filter((card) => card.seen > 0 && (card.due || 0) <= now)
    .sort((a, b) => flashcardPriority(b, now) - flashcardPriority(a, now));

  const selected = due.slice(0, limit);
  if (selected.length < limit) {
    const unseen = shuffleCopy(pool.filter((card) => !card.seen));
    selected.push(...unseen.slice(0, limit - selected.length));
  }

  return shuffleCopy(selected);
}

export function buildFlashcardFullSet(cards, moduleId = null) {
  return shuffleCopy(moduleId ? cards.filter((card) => card.moduleId === moduleId) : cards);
}

export function applyFlashcardResult(card, rating, now = Date.now()) {
  const previousStreak = Number.isFinite(card.correctStreak) ? card.correctStreak : 0;
  const recentRatings = [...(card.recentRatings || []), rating].slice(-RECENT_RATING_LIMIT);

  let correctStreak = previousStreak;
  let due = now;
  let lapseCount = card.lapseCount || 0;
  let knewCount = card.knewCount || 0;
  let unsureCount = card.unsureCount || 0;
  let didntKnowCount = card.didntKnowCount || 0;

  if (rating === 'knew') {
    correctStreak += 1;
    knewCount += 1;
    const intervalDays = KNEW_INTERVAL_DAYS[Math.min(correctStreak - 1, KNEW_INTERVAL_DAYS.length - 1)];
    due = now + intervalDays * DAY_MS;
  } else if (rating === 'unsure') {
    correctStreak = Math.max(0, correctStreak - 1);
    unsureCount += 1;
    due = now + UNSURE_REVIEW_HOURS * HOUR_MS;
  } else {
    correctStreak = 0;
    lapseCount += 1;
    didntKnowCount += 1;
    due = now + DIDNT_KNOW_REVIEW_HOURS * HOUR_MS;
  }

  return {
    correctStreak,
    due,
    lapseCount,
    knewCount,
    unsureCount,
    didntKnowCount,
    recentRatings,
    lastRating: rating,
    lastReviewedAt: now,
    seen: (card.seen || 0) + 1,
  };
}

export function flashcardStats(cards, moduleId = null, now = Date.now()) {
  const pool = moduleId ? cards.filter((card) => card.moduleId === moduleId) : cards;
  const due = pool.filter((card) => card.seen > 0 && (card.due || 0) <= now).length;
  const newCount = pool.filter((card) => !card.seen).length;
  const mastered = pool.filter((card) => flashcardMasteryState(card) === 'mastered').length;
  const learning = pool.filter((card) => flashcardMasteryState(card) === 'learning').length;
  const seen = pool.filter((card) => card.seen > 0).length;
  return { total: pool.length, due, newCount, mastered, learning, seen };
}
