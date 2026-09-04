import { CheckCircle2, ChevronLeft, XCircle } from 'lucide-react';

export default function StudyView({ question, index, total, sessionCorrect, selected, revealed, onAnswer, onNext, onExit }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
        <button onClick={onExit} className="flex items-center gap-1 hover:text-slate-800"><ChevronLeft size={14} /> Modules</button>
        <span>Card {index + 1} of {total} · {sessionCorrect} correct</span>
      </div>
      <div className="rounded-lg border border-slate-200 p-4">
        {question.scenarioText && <div className="mb-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">{question.scenarioText}</div>}
        <p className="mb-4 text-sm font-medium leading-relaxed text-slate-900">{question.prompt}</p>
        <div className="space-y-2">
          {question.presentationOptions.map((entry, i) => {
            const isCorrect = i === question.presentationCorrect;
            const isSelected = i === selected;
            let classes = 'border-slate-200 hover:border-slate-400';
            if (revealed && isCorrect) classes = 'border-emerald-500 bg-emerald-50';
            else if (revealed && isSelected && !isCorrect) classes = 'border-red-400 bg-red-50';
            return (
              <button key={`${entry.sourceIndex}-${i}`} onClick={() => onAnswer(i)} className={`flex w-full items-start justify-between gap-3 rounded-md border px-3 py-2 text-left text-sm ${classes}`}>
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
        {revealed && <div className="mt-4 border-t border-slate-200 pt-3">
          <p className="mb-3 text-xs leading-relaxed text-slate-600">{question.explanation}</p>
          <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
            <span>Source: {question.source}</span><span>Difficulty: {question.difficulty || 'unrated'}</span>
          </div>
          <button onClick={onNext} className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">{index + 1 < total ? 'Next card' : 'Finish session'}</button>
        </div>}
      </div>
    </div>
  );
}
