import { useEffect, useState } from 'react';
import { Pause, Play, X } from 'lucide-react';
import DailyStudyBar from './DailyStudyBar.jsx';
import StudyTimerView from './StudyTimerView.jsx';
import useDailyStudyTimer from '../hooks/useDailyStudyTimer.js';

const IDLE_AFTER_MS = 5 * 60 * 1000;

function useRecentAppActivity(enabled) {
  const [active, setActive] = useState(enabled);

  useEffect(() => {
    if (!enabled) {
      setActive(false);
      return undefined;
    }

    let lastActivity = Date.now();
    setActive(true);

    const markActive = () => {
      lastActivity = Date.now();
      setActive(true);
    };

    const checkIdle = window.setInterval(() => {
      setActive(Date.now() - lastActivity < IDLE_AFTER_MS);
    }, 15000);

    const events = ['pointerdown', 'keydown', 'scroll', 'touchstart'];
    events.forEach((event) => window.addEventListener(event, markActive, { passive: true }));

    return () => {
      window.clearInterval(checkIdle);
      events.forEach((event) => window.removeEventListener(event, markActive));
    };
  }, [enabled]);

  return enabled && active;
}

export default function StudyTimerWidget() {
  const [expanded, setExpanded] = useState(false);
  const [autoTracking, setAutoTracking] = useState(true);
  const activeUse = useRecentAppActivity(autoTracking);
  const timer = useDailyStudyTimer(activeUse);

  return <>
    <div className="fixed bottom-3 right-3 z-40 w-[min(310px,calc(100vw-24px))] rounded-lg bg-white shadow-lg">
      <DailyStudyBar
        todaySeconds={timer.todaySeconds}
        goalSeconds={timer.goalSeconds}
        progress={timer.progress}
        goalMet={timer.goalMet}
        running={timer.running}
        onOpen={() => setExpanded(true)}
      />
    </div>

    {expanded && <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 p-3 sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) setExpanded(false); }}>
      <div className="mx-auto max-w-2xl rounded-xl bg-white shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
          <div>
            <div className="text-sm font-semibold text-slate-900">Study time</div>
            <div className="mt-0.5 text-[10px] text-slate-400">Auto tracking pauses after 5 minutes of inactivity and whenever the tab is hidden.</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoTracking((value) => !value)}
              className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[10px] font-medium ${autoTracking ? 'border-indigo-200 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-500'}`}
            >
              {autoTracking ? <Pause size={12} /> : <Play size={12} />}
              {autoTracking ? 'Pause auto' : 'Resume auto'}
            </button>
            <button onClick={() => setExpanded(false)} className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="Close study timer"><X size={16} /></button>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <StudyTimerView timer={timer} />
        </div>
      </div>
    </div>}
  </>;
}
