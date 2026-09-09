export const STUDY_TIMER_STORAGE_KEY = 'ape-study-daily-time-v1';
export const DAILY_STUDY_GOAL_SECONDS = 60 * 60;

function safeSeconds(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.floor(number) : 0;
}

export function localDayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function normalizeStudyTimer(value = {}) {
  const days = {};
  Object.entries(value?.days || {}).forEach(([key, seconds]) => {
    if (/^\d{4}-\d{2}-\d{2}$/.test(key)) days[key] = safeSeconds(seconds);
  });

  return {
    version: 1,
    goalSeconds: safeSeconds(value?.goalSeconds) || DAILY_STUDY_GOAL_SECONDS,
    days,
  };
}

export function readStudyTimer() {
  if (typeof window === 'undefined' || !window.localStorage) return normalizeStudyTimer();
  try {
    const raw = window.localStorage.getItem(STUDY_TIMER_STORAGE_KEY);
    return raw ? normalizeStudyTimer(JSON.parse(raw)) : normalizeStudyTimer();
  } catch {
    return normalizeStudyTimer();
  }
}

export function writeStudyTimer(timer) {
  if (typeof window === 'undefined' || !window.localStorage) return false;
  try {
    window.localStorage.setItem(STUDY_TIMER_STORAGE_KEY, JSON.stringify(normalizeStudyTimer(timer)));
    return true;
  } catch {
    return false;
  }
}

export function addStudySeconds(timer, seconds, date = new Date()) {
  const amount = safeSeconds(seconds);
  if (!amount) return normalizeStudyTimer(timer);
  const current = normalizeStudyTimer(timer);
  const key = localDayKey(date);
  return {
    ...current,
    days: {
      ...current.days,
      [key]: safeSeconds(current.days[key]) + amount,
    },
  };
}

export function resetStudyDay(timer, date = new Date()) {
  const current = normalizeStudyTimer(timer);
  const key = localDayKey(date);
  return {
    ...current,
    days: {
      ...current.days,
      [key]: 0,
    },
  };
}

export function formatStudyClock(seconds) {
  const safe = Math.max(0, Math.floor(Number(seconds) || 0));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const secs = safe % 60;
  if (hours > 0) return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  return `${minutes}:${String(secs).padStart(2, '0')}`;
}

export function formatStudyMinutes(seconds) {
  const safe = Math.max(0, Math.floor(Number(seconds) || 0));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  if (hours > 0) return minutes ? `${hours}h ${minutes}m` : `${hours}h`;
  return `${minutes}m`;
}

function dayAtOffset(offset, from = new Date()) {
  const date = new Date(from);
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + offset);
  return date;
}

export function studyHistory(timer, count = 7, from = new Date()) {
  const current = normalizeStudyTimer(timer);
  return Array.from({ length: count }, (_, index) => {
    const offset = index - (count - 1);
    const date = dayAtOffset(offset, from);
    const key = localDayKey(date);
    const seconds = safeSeconds(current.days[key]);
    return {
      key,
      seconds,
      goalMet: seconds >= current.goalSeconds,
      isToday: offset === 0,
      label: offset === 0 ? 'Today' : date.toLocaleDateString(undefined, { weekday: 'short' }),
    };
  });
}

export function studyGoalStreak(timer, from = new Date()) {
  const current = normalizeStudyTimer(timer);
  const todayKey = localDayKey(from);
  const todayMet = safeSeconds(current.days[todayKey]) >= current.goalSeconds;
  let offset = todayMet ? 0 : -1;
  let streak = 0;

  while (offset > -3660) {
    const key = localDayKey(dayAtOffset(offset, from));
    if (safeSeconds(current.days[key]) < current.goalSeconds) break;
    streak += 1;
    offset -= 1;
  }
  return streak;
}
