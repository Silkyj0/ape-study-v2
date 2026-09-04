import { MODULES } from '../data/modules.js';
import { moduleStats } from '../lib/progress.js';

export default function DashboardView({ questions }) {
  return <div className="space-y-2">
    <h2 className="mb-2 text-sm font-semibold text-slate-900">Mastery by module</h2>
    {MODULES.map((module) => {
      const stats = moduleStats(questions, module.id);
      return <div key={module.id} className="rounded-lg border border-slate-200 p-3">
        <div className="mb-1 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-800">M{String(module.id).padStart(2, '0')}</span>
          <span className="text-xs text-slate-500">{stats.total === 0 && stats.pending === 0 ? 'No questions' : `${stats.accuracy ?? '–'}% accuracy · ${stats.total} ready${stats.pending ? ` · ${stats.pending} pending` : ''}`}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div className={`h-full ${stats.mastery > 66 ? 'bg-emerald-500' : stats.mastery > 33 ? 'bg-amber-500' : 'bg-red-400'}`} style={{ width: `${stats.mastery}%` }} />
        </div>
        {stats.due > 0 && <div className="mt-1 text-xs text-amber-600">{stats.due} due for review</div>}
      </div>;
    })}
  </div>;
}
