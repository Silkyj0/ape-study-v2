import { ChevronRight } from 'lucide-react';
import { MODULES } from '../data/modules.js';
import { moduleStats } from '../lib/progress.js';

export default function ModulesView({ questions, onStart }) {
  return (
    <div>
      <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">
        Answer order is balanced and shuffled for every study session. Existing seed content is unchanged; Modules 1 and 2 remain queued for a deliberate difficulty/distractor re-audit.
      </div>
      <div className="space-y-2">
        {MODULES.map((module) => {
          const stats = moduleStats(questions, module.id);
          return (
            <button
              key={module.id}
              disabled={stats.total === 0}
              onClick={() => onStart(module.id)}
              className="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-200 p-3 text-left hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-45"
            >
              <div className="min-w-0">
                <div className="text-sm font-medium text-slate-900">M{String(module.id).padStart(2, '0')} · {module.title}</div>
                <div className="mt-1 text-xs text-slate-500">
                  {stats.total === 0 && stats.pending === 0 ? 'No ready questions yet' : <>
                    {stats.total} ready · {stats.due} due
                    {stats.accuracy !== null && <> · {stats.accuracy}% accuracy</>}
                    {stats.pending > 0 && <span className="text-slate-400"> · {stats.pending} awaiting answer key</span>}
                  </>}
                </div>
              </div>
              {stats.total > 0 && <div className="flex shrink-0 flex-col items-end gap-1">
                <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full bg-emerald-500" style={{ width: `${stats.mastery}%` }} />
                </div>
                <ChevronRight size={16} className="text-slate-400" />
              </div>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
