import { useEffect, useMemo, useState } from 'react';
import {
  addStudySeconds,
  localDayKey,
  readStudyTimer,
  resetStudyDay,
  studyGoalStreak,
  studyHistory,
  writeStudyTimer,
} from '../lib/studyTimer.js';

export default function useDailyStudyTimer(autoActive = false) {
  const [timer, setTimer] = useState(() => readStudyTimer());
  const [manualRunning, setManualRunning] = useState(false);
  const [visible, setVisible] = useState(() => typeof document === 'undefined' || document.visibilityState !== 'hidden');

  useEffect(() => {
    function handleVisibility() {
      setVisible(document.visibilityState !== 'hidden');
    }
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const running = visible && (autoActive || manualRunning);

  useEffect(() => {
    if (!running) return undefined;
    let lastTick = Date.now();

    const interval = window.setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - lastTick) / 1000);
      if (elapsed < 1) return;
      lastTick += elapsed * 1000;
      setTimer((current) => {
        const next = addStudySeconds(current, elapsed, new Date(now));
        writeStudyTimer(next);
        return next;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [running]);

  const todaySeconds = timer.days[localDayKey()] || 0;
  const goalSeconds = timer.goalSeconds;
  const goalMet = todaySeconds >= goalSeconds;
  const remainingSeconds = Math.max(0, goalSeconds - todaySeconds);
  const progress = Math.min(1, todaySeconds / goalSeconds);
  const history = useMemo(() => studyHistory(timer, 7), [timer]);
  const streak = useMemo(() => studyGoalStreak(timer), [timer]);

  function startManual() {
    setManualRunning(true);
  }

  function pauseManual() {
    setManualRunning(false);
  }

  function resetToday() {
    setTimer((current) => {
      const next = resetStudyDay(current);
      writeStudyTimer(next);
      return next;
    });
    setManualRunning(false);
  }

  return {
    timer,
    todaySeconds,
    goalSeconds,
    remainingSeconds,
    progress,
    goalMet,
    streak,
    history,
    running,
    visible,
    autoActive,
    manualRunning,
    startManual,
    pauseManual,
    resetToday,
  };
}
