import { AlertTriangle, ChevronRight, Target } from 'lucide-react';
import { MODULES } from '../data/modules.js';
import { getWeakAreas } from '../lib/learning.js';
import { moduleStats } from '../lib/progress.js';

export default function DashboardView({ questions, onStartFocus }) {
  const weakAreas = getWeakAreas(questions);

  return <div className="space-y-5">
    <section>
      <div className="mb-2 flex items-center gap-2">
        <Target size={17} className="text-indigo-600" />
        <h2 className="text-sm font-semibold text-slate-900">Focus areas</h2>
      </div>
      <p className="mb-3 text-xs leading-relaxed text-slate-500">
        Weak areas are detected from recent results, repeated misses and answers you marked as guessed/not confident. A topic only appears after enough attempts to avoid overreacting to one mistake.
      </p>

      {weakAreas.length ? <div className="space-y-2">
        {weakAreas.map((area, index) => (
          <button
            key={area.topic}
            onClick={() => onStartFocus?.(area.topic)}
            className="flex w-full items-center justify-between gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-left hover:border-amber-400"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                {index === 0 && <AlertTriangle size={15} className="shrink-0 text-amber-600" />}
                <span className="text-sm font-medium text-slate-900">{area.topic}</span>
              </div>
              <div className="mt-1 text-xs text-slate-600">
                {area.accuracy}% accuracy · {area.recentMisses} misses
                {area.lowConfidence > 0 && <> · {area.lowConfidence} low-confidence correct</>}
                {' '}· {area.questionCount} question{area.questionCount === 1 ? '' : 's'}
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1 text-xs font-medium text-amber-800">Focus <ChevronRight size={15} /></div>
          </button>
        ))}
      </div> : <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-xs leading-relaxed text-emerald-800">
        No clear weak topic yet. Once you have a few attempts in each area, repeated misses, low recent accuracy or uncertain correct answers will appear here automatically.
      </div>}
    </section>

    <section>
      <h2 className="mb-2 text-sm font-semibold text-slate-900">Mastery by module</h2>
      <div className="space-y-2">
        {MODULES.map((module) => {
          const stats = moduleStats(questions, module.id);
          return <div key={module.id} className="rounded-lg border border-slate-200 p-3">
            <div className="mb-1 flex items-start justify-between gap-3 text-sm">
              <div>
                <span className="font-medium text-slate-800">M{String(module.id).padStart(2, '0')}</span>
                <div className="mt-1 text-[11px] text-slate-400">
                  {stats.newCount} new · {stats.learning} learning · {stats.mastered} mastered
                  {stats.weak > 0 && <span className="text-amber-600"> · {stats.weak} weak</span>}
                </div>
              </div>
              <span className="text-xs text-slate-500">{stats.total === 0 && stats.pending === 0 ? 'No questions' : `${stats.accuracy ?? '–'}% accuracy`}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div className={`h-full ${stats.mastery > 66 ? 'bg-emerald-500' : stats.mastery > 33 ? 'bg-amber-500' : 'bg-red-400'}`} style={{ width: `${stats.mastery}%` }} />
            </div>
            <div className="mt-1 flex justify-between text-[11px] text-slate-400">
              <span>{stats.mastery}% mastery</span>
              <span>{stats.due > 0 ? `${stats.due} due now` : 'Nothing due now'}</span>
            </div>
          </div>;
        })}
      </div>
    </section>
  </div>;
}
