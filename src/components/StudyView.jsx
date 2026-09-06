import { CheckCircle2, ChevronLeft, Flag, ShieldCheck, XCircle } from 'lucide-react';
import { getCalibrationTrap } from '../data/calibrationTraps.js';

function qaClasses(status) {
  if (status === 'parcs-confirmed') return 'border-emerald-200 bg-emerald-50 text-emerald-800';
  if (status === 'source-audited') return 'border-blue-200 bg-blue-50 text-blue-800';
  if (status === 'drive-source-verified') return 'border-cyan-200 bg-cyan-50 text-cyan-800';
  if (status === 'parc-external-verified') return 'border-violet-200 bg-violet-50 text-violet-800';
  if (status === 'needs-source-check' || status === 'legacy-placeholder') return 'border-amber-200 bg-amber-50 text-amber-800';
  return 'border-slate-200 bg-slate-50 text-slate-600';
}

function learningClasses(tone) {
  if (tone === 'error') return 'border-red-200 bg-red-50 text-red-800';
  if (tone === 'warning') return 'border-amber-200 bg-amber-50 text-amber-900';
  if (tone === 'mastered') return 'border-emerald-300 bg-emerald-50 text-emerald-900';
  return 'border-blue-200 bg-blue-50 text-blue-800';
}

const CONFIDENCE_OPTIONS = [
  { value: 'confident', label: 'Confident', note: 'I know why this is right.' },
  { value: 'unsure', label: 'Unsure', note: 'I have a view, but I am not certain.' },
  { value: 'guessing', label: 'Guessing', note: 'Mostly elimination, instinct or a guess.' },
];

function confidenceClasses(value, selected, revealed) {
  if (value === selected) {
    if (value === 'confident') return 'border-emerald-400 bg-emerald-50 text-emerald-900';
    if (value === 'unsure') return 'border-amber-400 bg-amber-50 text-amber-900';
    return 'border-rose-400 bg-rose-50 text-rose-900';
  }
  return revealed ? 'cursor-default border-slate-200 bg-slate-50 text-slate-400' : 'border-slate-200 text-slate-600 hover:border-slate-400 hover:bg-slate-50';
}

export default function StudyView({ question, index, total, sessionCorrect, selected, revealed, answerFeedback, confidence, onConfidence, onAnswer, onNext, onExit, onToggleFlag }) {
  const calibrationTrap = getCalibrationTrap(question);
  const confidenceLabel = CONFIDENCE_OPTIONS.find((entry) => entry.value === confidence)?.label;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
        <button onClick={onExit} className="flex items-center gap-1 hover:text-slate-800"><ChevronLeft size={14} /> Modules</button>
        <span>Card {index + 1} of {total} · {sessionCorrect} correct</span>
      </div>
      <div className="rounded-lg border border-slate-200 p-4">
        {question.scenarioText && <div className="mb-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">{question.scenarioText}</div>}
        <p className="mb-4 text-sm font-medium leading-relaxed text-slate-900">{question.prompt}</p>

        <div className="mb-4 rounded-md border border-slate-200 bg-slate-50 p-3">
          <div className="text-xs font-semibold text-slate-800">Before answering, how sure are you?</div>
          <p className="mt-1 text-[10px] leading-relaxed text-slate-500">Choose your confidence first so it is captured before you see whether the answer is correct.</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {CONFIDENCE_OPTIONS.map((entry) => (
              <button
                key={entry.value}
                disabled={revealed}
                onClick={() => onConfidence(entry.value)}
                className={`rounded-md border px-3 py-2 text-left transition ${confidenceClasses(entry.value, confidence, revealed)}`}
              >
                <div className="text-xs font-semibold">{entry.label}</div>
                <div className="mt-0.5 text-[10px] leading-relaxed opacity-75">{entry.note}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {question.presentationOptions.map((entry, i) => {
            const isCorrect = i === question.presentationCorrect;
            const isSelected = i === selected;
            let classes = confidence ? 'border-slate-200 hover:border-slate-400' : 'cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400';
            if (revealed && isCorrect) classes = 'border-emerald-500 bg-emerald-50';
            else if (revealed && isSelected && !isCorrect) classes = 'border-red-400 bg-red-50';
            return (
              <button
                key={`${entry.sourceIndex}-${i}`}
                disabled={revealed || !confidence}
                onClick={() => onAnswer(i)}
                className={`flex w-full items-start justify-between gap-3 rounded-md border px-3 py-2 text-left text-sm ${classes}`}
              >
                <span className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded bg-slate-100 text-[10px] font-semibold text-slate-500">{String.fromCharCode(65 + i)}</span>
                  <span>{entry.text}</span>
                </span>
                {revealed && isCorrect && <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />}
                {revealed && isSelected && !isCorrect && <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" />}
              </button>
            );
          })}
        </div>
        {!confidence && !revealed && <p className="mt-2 text-[10px] text-slate-400">Select Confident, Unsure or Guessing to unlock the answer choices.</p>}

        {revealed && <div className="mt-4 border-t border-slate-200 pt-3">
          {confidenceLabel && <div className="mb-3 text-[10px] font-medium uppercase tracking-wide text-slate-400">Pre-answer confidence: {confidenceLabel}</div>}
          <p className="mb-3 text-xs leading-relaxed text-slate-600">{question.explanation}</p>

          {question.examTip && <div className="mb-3 rounded-md border border-indigo-200 bg-indigo-50 p-2 text-indigo-900">
            <div className="text-[11px] font-semibold">Exam reasoning</div>
            <p className="mt-1 text-[10px] leading-relaxed">{question.examTip}</p>
          </div>}

          {calibrationTrap && <div className="mb-3 rounded-md border border-violet-200 bg-violet-50 p-2 text-violet-900">
            <div className="text-[11px] font-semibold">PARCS calibration trap · Scenario {calibrationTrap.scenario} Q{calibrationTrap.questionNumber}</div>
            <p className="mt-1 text-[10px] leading-relaxed">{calibrationTrap.lesson}</p>
          </div>}

          {answerFeedback && <div className={`mb-3 rounded-md border p-2 ${learningClasses(answerFeedback.tone)}`}>
            <div className="text-[11px] font-semibold">{answerFeedback.title}</div>
            <p className="mt-1 text-[10px] leading-relaxed opacity-90">{answerFeedback.detail}</p>
          </div>}

          <div className={`mb-3 rounded-md border p-2 ${qaClasses(question.qaStatus)}`}>
            <div className="flex items-center gap-2 text-[11px] font-semibold"><ShieldCheck size={14} /> {question.qaLabel || 'QA status unknown'}</div>
            {question.qaNote && <p className="mt-1 text-[10px] leading-relaxed opacity-90">{question.qaNote}</p>}
          </div>

          <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
            {question.learningTopic && <span>Topic: {question.learningTopic}</span>}
            <span>Source: {question.source}</span>
            <span>Difficulty: {question.difficulty || 'unrated'}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button onClick={onNext} className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">{index + 1 < total ? 'Next card' : 'Finish session'}</button>
            <button
              onClick={() => onToggleFlag(question.id)}
              className={`flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs font-medium ${question.flagged ? 'border-amber-300 bg-amber-50 text-amber-800' : 'border-slate-200 text-slate-500 hover:border-amber-300 hover:text-amber-700'}`}
            >
              <Flag size={14} className={question.flagged ? 'fill-current' : ''} />
              {question.flagged ? 'Flagged for QA' : 'Flag for QA'}
            </button>
          </div>
        </div>}
      </div>
    </div>
  );
}
