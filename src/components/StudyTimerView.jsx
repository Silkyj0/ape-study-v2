import { CheckCircle2, Flame, Pause, Play, RotateCcw, Timer, Target } from 'lucide-react';
import { formatStudyClock, formatStudyMinutes } from '../lib/studyTimer.js';

function Stat({ icon: Icon, label, value }) {
  return <div className="rounded-lg border border-slate-200 bg-white p-3">
    <div className="flex items-center gap-2 text-slate-500"><Icon size={14} /><span className="text-[10px] uppercase tracking-wide">{label}</span></div>
    <div className="mt-1 text-lg font-semibold text-slate-900">{value}</div>
  </div>;
}

export default function StudyTimerView({ timer }) {
  const {
    todaySeconds,
    goalSeconds,
    remainingSeconds,
    progress,
    goalMet,
    streak,
    history,
    running,
    autoActive,
    manualRunning,
    startManual,
    pauseManual,
    resetToday,
  } = timer;

  const goalMinutes = Math.round(goalSeconds / 60);
  const weeklySeconds = history.reduce((sum, day) => sum + day.seconds, 0);

  return <div>
    <div className="mb-5">
      <div className="flex items-center gap-2"><Timer size={20} className="text-indigo-600" /><h2 className="text-lg font-semibold text-slate-900">Daily study timer</h2></div>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">Target at least {goalMinutes} minutes of focused APE study each day. Active study sessions are tracked automatically while this tab is visible.</p>
    </div>

    <div className={`rounded-2xl border p-5 ${goalMet ? 'border-emerald-200 bg-emerald-50/50' : 'border-indigo-200 bg-indigo-50/30'}`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Today</div>
          <div className="mt-1 font-mono text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{formatStudyClock(todaySeconds)}</div>
          <div className="mt-2 text-xs text-slate-500">{goalMet ? 'You have hit today’s one-hour goal.' : `${formatStudyMinutes(remainingSeconds)} remaining to reach today’s goal.`}</div>
        </div>
        <div className="flex items-center gap-2">
          {autoActive ? <div className="rounded-lg border border-indigo-200 bg-white px-3 py-2 text-xs font-medium text-indigo-700">Auto tracking active study</div> : manualRunning ? <button onClick={pauseManual} className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"><Pause size={15} /> Pause focus timer</button> : <button onClick={startManual} className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"><Play size={15} /> Start focus timer</button>}
        </div>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-white">
        <div className={`h-full rounded-full transition-all ${goalMet ? 'bg-emerald-500' : 'bg-indigo-500'}`} style={{ width: `${Math.min(100, Math.round(progress * 100))}%` }} />
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-slate-400"><span>0m</span><span>{goalMinutes}m goal</span></div>
    </div>

    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
      <Stat icon={Target} label="Daily target" value={`${goalMinutes}m`} />
      <Stat icon={Flame} label="Goal streak" value={`${streak} day${streak === 1 ? '' : 's'}`} />
      <Stat icon={Timer} label="Last 7 days" value={formatStudyMinutes(weeklySeconds)} />
      <Stat icon={CheckCircle2} label="Goal days" value={`${history.filter((day) => day.goalMet).length}/7`} />
    </div>

    <div className="mt-6 rounded-lg border border-slate-200 p-4">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">Last 7 days</h3>
      <div className="mt-3 space-y-2.5">
        {history.map((day) => {
          const width = Math.min(100, Math.round((day.seconds / goalSeconds) * 100));
          return <div key={day.key}>
            <div className="mb-1 flex items-center justify-between text-xs"><span className={day.isToday ? 'font-semibold text-slate-900' : 'text-slate-600'}>{day.label}</span><span className={day.goalMet ? 'font-medium text-emerald-700' : 'text-slate-400'}>{formatStudyMinutes(day.seconds)}</span></div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${day.goalMet ? 'bg-emerald-500' : 'bg-indigo-400'}`} style={{ width: `${width}%` }} /></div>
          </div>;
        })}
      </div>
    </div>

    <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">
      <div className="font-semibold text-slate-800">What counts as study time?</div>
      <p className="mt-1">The app automatically counts time while you are actively inside an MCQ study session, PARCS scenario, flashcard session or exam/review. It pauses when the browser tab is hidden. Use the focus timer above when you want to count other deliberate study inside the app.</p>
    </div>

    <div className="mt-5 flex justify-end">
      <button onClick={() => { if (window.confirm('Reset today’s recorded study time to zero?')) resetToday(); }} className="flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-500 hover:border-red-200 hover:bg-red-50 hover:text-red-700"><RotateCcw size={13} /> Reset today</button>
    </div>
  </div>;
}
