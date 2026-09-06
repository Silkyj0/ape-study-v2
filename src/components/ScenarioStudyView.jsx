import { CheckCircle2, ChevronLeft, Flag, ShieldCheck, XCircle } from 'lucide-react';
import { getCalibrationTrap } from '../data/calibrationTraps.js';

export default function ScenarioStudyView({ scenario, selections, submitted, onSelect, onSubmit, onFinish, onExit, onToggleFlag }) {
  const questions = scenario.questions || [];
  const answeredCount = questions.filter((question) => selections[question.id] !== undefined).length;
  const score = submitted
    ? questions.filter((question) => selections[question.id] === question.presentationCorrect).length
    : 0;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
        <button onClick={onExit} className="flex items-center gap-1 hover:text-slate-800"><ChevronLeft size={14} /> PARCS</button>
        <span>Scenario {scenario.label} · {submitted ? `${score}/${questions.length} correct` : `${answeredCount}/${questions.length} answered`}</span>
      </div>

      <div className="mb-4 rounded-lg border border-violet-200 bg-violet-50 p-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-violet-700">Scenario {scenario.label}</div>
        {scenario.scenarioText && <div className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-800">{scenario.scenarioText}</div>}
      </div>

      <div className="space-y-4">
        {questions.map((question, qIndex) => {
          const selected = selections[question.id];
          const selectedCorrect = submitted && selected === question.presentationCorrect;
          const calibrationTrap = getCalibrationTrap(question);

          return (
            <section key={question.id} className="rounded-lg border border-slate-200 p-4">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Question {qIndex + 1}</div>
              <p className="mb-3 text-sm font-medium leading-relaxed text-slate-900">{question.prompt}</p>

              <div className="space-y-2">
                {question.presentationOptions.map((entry, optionIndex) => {
                  const isSelected = selected === optionIndex;
                  const isCorrect = optionIndex === question.presentationCorrect;
                  let classes = 'border-slate-200 hover:border-slate-400';
                  if (!submitted && isSelected) classes = 'border-violet-400 bg-violet-50';
                  if (submitted && isCorrect) classes = 'border-emerald-500 bg-emerald-50';
                  else if (submitted && isSelected && !isCorrect) classes = 'border-red-400 bg-red-50';

                  return (
                    <button
                      key={`${question.id}-${entry.sourceIndex}`}
                      disabled={submitted}
                      onClick={() => onSelect(question.id, optionIndex)}
                      className={`flex w-full items-start justify-between gap-3 rounded-md border px-3 py-2 text-left text-sm disabled:cursor-default ${classes}`}
                    >
                      <span className="flex gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded bg-slate-100 text-[10px] font-semibold text-slate-500">{String.fromCharCode(65 + optionIndex)}</span>
                        <span>{entry.text}</span>
                      </span>
                      {submitted && isCorrect && <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />}
                      {submitted && isSelected && !isCorrect && <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" />}
                    </button>
                  );
                })}
              </div>

              {submitted && <div className="mt-3 border-t border-slate-200 pt-3">
                <div className={`mb-2 text-xs font-semibold ${selectedCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                  {selectedCorrect ? 'Correct' : 'Incorrect'}
                </div>
                <p className="text-xs leading-relaxed text-slate-600">{question.explanation}</p>

                {calibrationTrap && <div className="mt-3 rounded-md border border-violet-200 bg-violet-50 p-2 text-violet-900">
                  <div className="text-[11px] font-semibold">PARCS calibration trap</div>
                  <p className="mt-1 text-[10px] leading-relaxed">{calibrationTrap.lesson}</p>
                </div>}

                <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px] text-slate-400">
                  <span className="inline-flex items-center gap-1 text-emerald-700"><ShieldCheck size={12} /> PARCS confirmed</span>
                  <span>Source: {question.source}</span>
                  <button
                    onClick={() => onToggleFlag(question.id)}
                    className={`ml-auto inline-flex items-center gap-1 rounded border px-2 py-1 ${question.flagged ? 'border-amber-300 bg-amber-50 text-amber-800' : 'border-slate-200 text-slate-500'}`}
                  >
                    <Flag size={11} className={question.flagged ? 'fill-current' : ''} /> {question.flagged ? 'Flagged' : 'Flag for QA'}
                  </button>
                </div>
              </div>}
            </section>
          );
        })}
      </div>

      <div className="sticky bottom-0 mt-4 border-t border-slate-200 bg-white/95 py-3 backdrop-blur">
        {!submitted ? (
          <button
            disabled={answeredCount !== questions.length}
            onClick={onSubmit}
            className="w-full rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {answeredCount === questions.length ? `Submit scenario ${scenario.label}` : `Answer all questions (${answeredCount}/${questions.length})`}
          </button>
        ) : (
          <button onClick={onFinish} className="w-full rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white">Finish scenario</button>
        )}
      </div>
    </div>
  );
}
