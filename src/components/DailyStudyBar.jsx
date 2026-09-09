import { CheckCircle2, Timer } from 'lucide-react';
import { formatStudyMinutes } from '../lib/studyTimer.js';

export default function DailyStudyBar({ todaySeconds, goalSeconds, progress, goalMet, running, onOpen, disabled = false }) {
  const percent = Math.round(progress * 100);
  const goalMinutes = Math.round(goalSeconds / 60);

  return <button
    type="button"
    disabled={disabled}
    onClick={onOpen}
    className={`mt-2 block w-full rounded-md border px-2.5 py-2 text-left transition ${goalMet ? 'border-emerald-200 bg-emerald-50/80' : 'border-slate-200 bg-slate-50/80'} ${disabled ? 'cursor-default' : 'hover:border-indigo-300 hover:bg-indigo-50/50'}`}
  >
    <div className="flex items-center justify-between gap-3 text-[10px] sm:text-[11px]">
      <div className={`flex items-center gap-1.5 font-semibold ${goalMet ? 'text-emerald-800' : 'text-slate-700'}`}>
        {goalMet ? <CheckCircle2 size={13} /> : <Timer size={13} />}
        <span>{goalMet ? 'Daily goal complete' : 'Daily study'}</span>
        {running && <span className="inline-flex items-center gap-1 font-normal text-indigo-600"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> tracking</span>}
      </div>
      <span className={goalMet ? 'text-emerald-700' : 'text-slate-500'}>{formatStudyMinutes(todaySeconds)} / {goalMinutes}m</span>
    </div>
    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white">
      <div className={`h-full rounded-full transition-all ${goalMet ? 'bg-emerald-500' : 'bg-indigo-500'}`} style={{ width: `${Math.min(100, percent)}%` }} />
    </div>
  </button>;
}
