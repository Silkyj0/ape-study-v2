import { AlertTriangle, ChevronRight, Target } from 'lucide-react';
import { MODULES } from '../data/modules.js';
import { getCalibrationPatternAreas, getWeakAreas } from '../lib/learning.js';
import { moduleStats } from '../lib/progress.js';

export default function DashboardView({ questions, onStartFocus, onStartCalibrationFocus }) {
  const weakAreas = getWeakAreas(questions);
  const calibrationAreas = getCalibrationPatternAreas(questions);

  return <div className="space-y-6">
    <section>
      <div className="mb-2 flex items-center gap-2">
        <Target size={17} className="text-violet-600" />
        <h2 className="text-sm font-semibold text-slate-900">PARCS calibration traps</h2>
      </div>
      <p className="mb-3 text-xs leading-relaxed text-slate-500">
        These are the recurring judgement patterns exposed by the official sample questions where the blind calibration disagreed with the PARCS key. They are high-value exam traps, not assumptions about your own weak areas. Each drill starts with the exact missed PARCS item, then mixes in related source-verified questions.
      </p>

      <div className="space-y-2">
        {calibrationAreas.map((area) => (
          <button
            key={area.id}
            onClick={() => onStartCalibrationFocus?.(area.id)}
            className="flex w-full items-center justify-between gap-3 rounded-lg border border-violet-200 bg-violet-50/70 p-3 text-left hover:border-violet-400"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-slate-900">{area.title}</span>
                <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-violet-700 ring-1 ring-inset ring-violet-200">
                  {area.trapCount} official trap{area.trapCount === 1 ? '' : 's'}
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">{area.summary}</p>
              <div className="mt-1.5 text-[11px] text-slate-500">
                {area.modules.length > 0 && <>Modules {area.modules.map((moduleId) => `M${String(moduleId).padStart(2, '0')}`).join(', ')} · </>}
                {area.attempts > 0
                  ? <>{area.accuracy}% trap accuracy · {area.mastered}/{area.availableTrapCount} mastered{area.recentMisses > 0 ? ` · ${area.recentMisses} recent miss${area.recentMisses === 1 ? '' : 'es'}` : ''}</>
                  : <>Not drilled yet</>}
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1 text-xs font-medium text-violet-800">Drill <ChevronRight size={15} /></div>
          </button>
        ))}
      </div>
    </section>

    <section>
      <div className="mb-2 flex items-center gap-2">
        <Target size={17} className="text-indigo-600" />
        <h2 className="text-sm font-semibold text-slate-900">Your focus areas</h2>
      </div>
      <p className="mb-3 text-xs leading-relaxed text-slate-500">
        Personal weak areas are detected from your recent results, repeated misses and answers you marked as guessed/not confident. A topic only appears after enough attempts to avoid overreacting to one mistake.
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
        No clear personal weak topic yet. Once you have a few attempts in each area, repeated misses, low recent accuracy or uncertain correct answers will appear here automatically.
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
