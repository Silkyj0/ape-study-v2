import { ChevronRight, FlaskConical } from 'lucide-react';
import { MODULES } from '../data/modules.js';
import { moduleStats } from '../lib/progress.js';

export default function ModulesView({ questions, onStart, onCalibration }) {
  const examCount = questions.filter((q) => ['source-audited', 'drive-source-verified', 'parc-external-verified'].includes(q.qaStatus)).length;
  const parcsCount = questions.filter((q) => q.qaStatus === 'parcs-confirmed').length;

  return (
    <div>
      <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">
        Question order and answer order are shuffled for every study session. Modules 1 and 2 use a smaller curated bank, while Modules 3–5 are built from connected readings and, for Module 5, current public sources explicitly directed by PARC. PARCS sample questions remain locked and unchanged.
      </div>

      <button
        onClick={onCalibration}
        className="mb-4 flex w-full items-center justify-between gap-3 rounded-lg border border-indigo-200 bg-indigo-50 p-3 text-left hover:border-indigo-400"
      >
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-indigo-950"><FlaskConical size={17} /> Verified exam bank · {examCount} questions</div>
          <div className="mt-1 text-xs text-indigo-700">Source-audited M1/M2 + verified-source M3–M5 · excludes the {parcsCount} locked PARCS samples · shuffled each run</div>
        </div>
        <ChevronRight size={18} className="shrink-0 text-indigo-500" />
      </button>

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
