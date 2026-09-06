import { BadgeCheck, ChevronRight, Layers3, RefreshCw, Shuffle } from 'lucide-react';
import { MODULES } from '../data/modules.js';
import { getParcsScenarioGroups } from '../lib/scenarios.js';
import { moduleStats } from '../lib/progress.js';

export default function ParcsView({ questions, onStartMixed, onStartModule, onStartScenario }) {
  const parcsQuestions = questions.filter((q) => q.qaStatus === 'parcs-confirmed' && q.status === 'ready');
  const scenarios = getParcsScenarioGroups(parcsQuestions);
  const now = Date.now();
  const due = parcsQuestions.filter((q) => q.seen > 0 && q.due <= now).length;
  const unseen = parcsQuestions.filter((q) => !q.seen).length;
  const attempted = parcsQuestions.filter((q) => q.seen > 0);
  const attempts = attempted.reduce((sum, q) => sum + (q.seen || 0), 0);
  const correct = attempted.reduce((sum, q) => sum + (q.correctCount || 0), 0);
  const accuracy = attempts ? Math.round((correct / attempts) * 100) : null;

  function startRandomScenario() {
    if (!scenarios.length) return;
    const unseenScenarios = scenarios.filter((scenario) => scenario.questions.some((question) => !question.seen));
    const pool = unseenScenarios.length ? unseenScenarios : scenarios;
    onStartScenario(pool[Math.floor(Math.random() * pool.length)].key);
  }

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
          {parcsQuestions.length} questions · {scenarios.length} linked scenarios · {unseen} unseen · {due} due{accuracy !== null ? ` · ${accuracy}% accuracy` : ''}
        </div>
      </div>

      <button
        onClick={onStartMixed}
        className="mb-3 flex w-full items-center justify-between gap-3 rounded-lg border border-violet-200 bg-violet-50 p-3 text-left hover:border-violet-400"
      >
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-violet-950"><RefreshCw size={17} /> Mixed PARCS review · up to 25 cards</div>
          <div className="mt-1 text-xs text-violet-700">Adaptive across the official sample bank: mistakes and due cards first, then unseen samples.</div>
        </div>
        <ChevronRight size={18} className="shrink-0 text-violet-600" />
      </button>

      {scenarios.length > 0 && <section className="mb-5 rounded-lg border border-sky-200 bg-sky-50/50 p-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-sky-950"><Layers3 size={17} /> Scenario mode</div>
            <p className="mt-1 text-xs leading-relaxed text-sky-800">The scenario stays visible and all linked questions are answered before any result or explanation is revealed.</p>
          </div>
          <button onClick={startRandomScenario} className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-sky-300 bg-white px-2.5 py-2 text-xs font-medium text-sky-800 hover:border-sky-500">
            <Shuffle size={14} /> Random
          </button>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {scenarios.map((scenario) => {
            const scenarioAttempts = scenario.questions.reduce((sum, q) => sum + (q.seen || 0), 0);
            const scenarioCorrect = scenario.questions.reduce((sum, q) => sum + (q.correctCount || 0), 0);
            const scenarioAccuracy = scenarioAttempts ? Math.round((scenarioCorrect / scenarioAttempts) * 100) : null;
            return <button
              key={scenario.key}
              onClick={() => onStartScenario(scenario.key)}
              className="rounded-md border border-sky-200 bg-white p-2 text-left hover:border-sky-400"
            >
              <div className="text-xs font-semibold text-slate-900">Scenario {scenario.label}</div>
              <div className="mt-0.5 text-[10px] text-slate-500">{scenario.questions.length} questions{scenarioAccuracy !== null ? ` · ${scenarioAccuracy}%` : ' · new'}</div>
            </button>;
          })}
        </div>
      </section>}

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
