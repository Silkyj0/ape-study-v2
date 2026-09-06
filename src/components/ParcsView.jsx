import { BadgeCheck, ChevronRight, RefreshCw } from 'lucide-react';
import { MODULES } from '../data/modules.js';
import { moduleStats } from '../lib/progress.js';

export default function ParcsView({ questions, onStartMixed, onStartModule }) {
  const parcsQuestions = questions.filter((q) => q.qaStatus === 'parcs-confirmed' && q.status === 'ready');
  const now = Date.now();
  const due = parcsQuestions.filter((q) => q.seen > 0 && q.due <= now).length;
  const unseen = parcsQuestions.filter((q) => !q.seen).length;
  const attempted = parcsQuestions.filter((q) => q.seen > 0);
  const attempts = attempted.reduce((sum, q) => sum + (q.seen || 0), 0);
  const correct = attempted.reduce((sum, q) => sum + (q.correctCount || 0), 0);
  const accuracy = attempts ? Math.round((correct / attempts) * 100) : null;

  return (
    <div>
      <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-950">
          <BadgeCheck size={18} /> Official PARCS supplied questions
        </div>
        <p className="mt-1 text-xs leading-relaxed text-emerald-800">
          This section contains only the sample questions supplied by PARCS and the answer keys you confirmed during calibration. The wording and confirmed answers are locked; ordinary authored questions are excluded.
        </p>
        <div className="mt-2 text-[11px] text-emerald-700">
          {parcsQuestions.length} questions · {unseen} unseen · {due} due{accuracy !== null ? ` · ${accuracy}% accuracy` : ''}
        </div>
      </div>

      <button
        onClick={onStartMixed}
        className="mb-4 flex w-full items-center justify-between gap-3 rounded-lg border border-violet-200 bg-violet-50 p-3 text-left hover:border-violet-400"
      >
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-violet-950"><RefreshCw size={17} /> Mixed PARCS review · up to 25 cards</div>
          <div className="mt-1 text-xs text-violet-700">Adaptive across the official sample bank: mistakes and due cards first, then unseen samples.</div>
        </div>
        <ChevronRight size={18} className="shrink-0 text-violet-600" />
      </button>

      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">PARCS samples by module</div>
      <div className="space-y-2">
        {MODULES.map((module) => {
          const moduleParcs = parcsQuestions.filter((q) => q.moduleId === module.id);
          if (!moduleParcs.length) return null;
          const stats = moduleStats(moduleParcs, module.id);

          return (
            <button
              key={module.id}
              onClick={() => onStartModule(module.id)}
              className="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-200 p-3 text-left hover:border-emerald-400 hover:bg-emerald-50/30"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <BadgeCheck size={15} className="shrink-0 text-emerald-600" />
                  <div className="text-sm font-medium text-slate-900">M{String(module.id).padStart(2, '0')} · {module.title}</div>
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  {stats.total} supplied question{stats.total === 1 ? '' : 's'} · {stats.newCount} new · {stats.mastered} mastered
                  {stats.accuracy !== null && <> · {stats.accuracy}% accuracy</>}
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                <span className="text-[10px] font-medium text-emerald-700">Full set</span>
                <ChevronRight size={16} className="text-slate-400" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
