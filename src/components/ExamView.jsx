import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, CheckCircle2, ChevronLeft, ChevronRight, Clock3, Flag, RotateCcw, TimerReset, XCircle } from 'lucide-react';
import { getCalibrationTrap } from '../data/calibrationTraps.js';
import { EXAM_DURATION_MINUTES, EXAM_QUESTION_COUNT, formatExamTime } from '../lib/exam.js';

function scoreTone(percentage) {
  if (percentage >= 80) return 'border-emerald-200 bg-emerald-50 text-emerald-900';
  if (percentage >= 65) return 'border-amber-200 bg-amber-50 text-amber-900';
  return 'border-red-200 bg-red-50 text-red-900';
}

export default function ExamView({
  questions,
  currentIndex,
  selections,
  reviewFlags,
  endsAt,
  submitted,
  result,
  history,
  bankCount,
  onStart,
  onSelect,
  onNavigate,
  onToggleReview,
  onSubmit,
  onExit,
}) {
  const [remainingMs, setRemainingMs] = useState(() => Math.max(0, (endsAt || 0) - Date.now()));
  const [showAllReview, setShowAllReview] = useState(false);
  const expiredRef = useRef(false);

  useEffect(() => {
    if (!questions?.length || submitted || !endsAt) return undefined;
    expiredRef.current = false;

    const update = () => {
      const next = Math.max(0, endsAt - Date.now());
      setRemainingMs(next);
      if (next <= 0 && !expiredRef.current) {
        expiredRef.current = true;
        onSubmit(true);
      }
    };

    update();
    const timer = window.setInterval(update, 500);
    return () => window.clearInterval(timer);
  }, [questions?.length, submitted, endsAt, onSubmit]);

  if (!questions?.length) {
    const recent = (history || []).slice(-5).reverse();
    return (
      <div>
        <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-base font-semibold text-slate-900"><Clock3 size={19} /> Exam simulation</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Sit a closed-feedback practice exam of <strong>{EXAM_QUESTION_COUNT} questions in {EXAM_DURATION_MINUTES} minutes</strong>. Answers, explanations, sources and scores stay hidden until submission.
          </p>
          <div className="mt-3 grid gap-2 text-xs text-slate-600 sm:grid-cols-2">
            <div className="rounded-md border border-slate-200 bg-white p-3"><strong>Balanced coverage</strong><br />Questions are spread across Modules 1–11 so a larger bank does not dominate the sitting.</div>
            <div className="rounded-md border border-slate-200 bg-white p-3"><strong>Trusted bank only</strong><br />Uses PARCS-confirmed and source-verified questions; provisional/user-added items are excluded.</div>
            <div className="rounded-md border border-slate-200 bg-white p-3"><strong>Exam behaviour</strong><br />Move backwards and forwards, change answers, and flag questions for review before submitting.</div>
            <div className="rounded-md border border-slate-200 bg-white p-3"><strong>No invented pass mark</strong><br />The result reports your score and module breakdown without claiming an official APE pass threshold.</div>
          </div>
          <div className="mt-3 text-[11px] text-slate-500">{bankCount} trusted questions currently available for simulation.</div>
        </div>

        <button onClick={onStart} className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Start 40-question exam · 60:00
        </button>

        {recent.length > 0 && <section className="mt-6">
          <h2 className="mb-2 text-sm font-semibold text-slate-900">Recent simulations</h2>
          <div className="space-y-2">
            {recent.map((attempt) => (
              <div key={attempt.id || attempt.submittedAt} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 text-sm">
                <div>
                  <div className="font-medium text-slate-800">{attempt.score}/{attempt.total} · {attempt.percentage}%</div>
                  <div className="mt-0.5 text-[11px] text-slate-400">{new Date(attempt.submittedAt).toLocaleString()} · {formatExamTime(attempt.timeSpentMs)}</div>
                </div>
                {attempt.unanswered > 0 && <span className="text-xs text-amber-600">{attempt.unanswered} unanswered</span>}
              </div>
            ))}
          </div>
        </section>}
      </div>
    );
  }

  if (submitted && result) {
    const reviewQuestions = showAllReview
      ? questions
      : questions.filter((question) => {
        const selected = selections[question.id];
        return selected === undefined || selected !== question.presentationCorrect;
      });

    return (
      <div>
        <button onClick={onExit} className="mb-3 flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800"><ChevronLeft size={14} /> Exit results</button>

        <div className={`rounded-lg border p-4 ${scoreTone(result.percentage)}`}>
          <div className="text-xs font-semibold uppercase tracking-wide opacity-70">Exam result</div>
          <div className="mt-1 text-3xl font-bold">{result.score}/{result.total} <span className="text-lg font-semibold">· {result.percentage}%</span></div>
          <div className="mt-2 text-xs opacity-80">Time used: {formatExamTime(result.timeSpentMs)}{result.unanswered ? ` · ${result.unanswered} unanswered` : ' · all questions answered'}</div>
        </div>

        <section className="mt-5">
          <h2 className="mb-2 text-sm font-semibold text-slate-900">Module breakdown</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {result.moduleBreakdown.map((module) => (
              <div key={module.moduleId} className="rounded-lg border border-slate-200 p-3">
                <div className="flex items-center justify-between gap-3 text-sm"><span className="font-medium">M{String(module.moduleId).padStart(2, '0')}</span><span>{module.correct}/{module.total} · {module.percentage}%</span></div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full bg-slate-700" style={{ width: `${module.percentage}%` }} /></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-slate-900">Review</h2>
            <button onClick={() => setShowAllReview((value) => !value)} className="text-xs font-medium text-indigo-700 hover:text-indigo-900">
              {showAllReview ? 'Show incorrect only' : 'Show all questions'}
            </button>
          </div>
          {!reviewQuestions.length ? <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">No incorrect or unanswered questions to review.</div> : <div className="space-y-3">
            {reviewQuestions.map((question) => {
              const selected = selections[question.id];
              const answered = selected !== undefined;
              const correct = answered && selected === question.presentationCorrect;
              const calibrationTrap = getCalibrationTrap(question);
              return (
                <article key={question.id} className="rounded-lg border border-slate-200 p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">M{String(question.moduleId).padStart(2, '0')}</span>
                    <span className={`flex items-center gap-1 text-xs font-medium ${correct ? 'text-emerald-700' : 'text-red-700'}`}>{correct ? <CheckCircle2 size={14} /> : <XCircle size={14} />}{correct ? 'Correct' : answered ? 'Incorrect' : 'Unanswered'}</span>
                  </div>
                  {question.scenarioText && <div className="mb-2 rounded-md bg-slate-50 p-2 text-xs leading-relaxed text-slate-600">{question.scenarioText}</div>}
                  <p className="text-sm font-medium leading-relaxed text-slate-900">{question.prompt}</p>
                  <div className="mt-3 space-y-1 text-xs">
                    <div><span className="font-semibold text-slate-500">Your answer:</span> <span className={correct ? 'text-emerald-700' : 'text-red-700'}>{answered ? question.presentationOptions[selected]?.text : 'No answer'}</span></div>
                    <div><span className="font-semibold text-slate-500">Correct answer:</span> <span className="text-emerald-700">{question.presentationOptions[question.presentationCorrect]?.text}</span></div>
                  </div>
                  <p className="mt-3 border-t border-slate-200 pt-3 text-xs leading-relaxed text-slate-600">{question.explanation}</p>
                  {calibrationTrap && <div className="mt-3 rounded-md border border-violet-200 bg-violet-50 p-2 text-[10px] leading-relaxed text-violet-900"><strong>PARCS calibration trap:</strong> {calibrationTrap.lesson}</div>}
                  <div className="mt-2 text-[10px] text-slate-400">Source: {question.source}</div>
                </article>
              );
            })}
          </div>}
        </section>

        <div className="mt-5 flex flex-wrap gap-2">
          <button onClick={onStart} className="flex items-center gap-1.5 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"><RotateCcw size={15} /> New exam</button>
          <button onClick={onExit} className="rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-600">Back to exam home</button>
        </div>
      </div>
    );
  }

  const question = questions[currentIndex];
  const answeredCount = questions.filter((item) => selections[item.id] !== undefined).length;
  const reviewCount = Object.values(reviewFlags || {}).filter(Boolean).length;
  const timeUrgent = remainingMs <= 5 * 60 * 1000;

  return (
    <div>
      <div className="sticky top-[61px] z-10 -mx-4 mb-4 border-b border-slate-200 bg-white/95 px-4 py-2 backdrop-blur sm:-mx-5 sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <button onClick={onExit} className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800"><ChevronLeft size={14} /> Exit exam</button>
          <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold tabular-nums ${timeUrgent ? 'bg-red-50 text-red-700' : 'bg-slate-100 text-slate-800'}`}><Clock3 size={15} /> {formatExamTime(remainingMs)}</div>
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500"><span>Question {currentIndex + 1} of {questions.length}</span><span>{answeredCount} answered · {reviewCount} flagged</span></div>
      </div>

      <div className="mb-4 rounded-lg border border-slate-200 p-4">
        <div className="mb-2 flex items-center justify-between gap-3"><span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">M{String(question.moduleId).padStart(2, '0')}</span><button onClick={() => onToggleReview(question.id)} className={`flex items-center gap-1 rounded border px-2 py-1 text-xs ${reviewFlags?.[question.id] ? 'border-amber-300 bg-amber-50 text-amber-800' : 'border-slate-200 text-slate-500'}`}><Flag size={13} className={reviewFlags?.[question.id] ? 'fill-current' : ''} /> {reviewFlags?.[question.id] ? 'Flagged' : 'Flag for review'}</button></div>
        {question.scenarioText && <div className="mb-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">{question.scenarioText}</div>}
        <p className="mb-4 text-sm font-medium leading-relaxed text-slate-900">{question.prompt}</p>
        <div className="space-y-2">
          {question.presentationOptions.map((entry, optionIndex) => {
            const selected = selections[question.id] === optionIndex;
            return <button key={`${question.id}-${entry.sourceIndex}`} onClick={() => onSelect(question.id, optionIndex)} className={`flex w-full items-start gap-3 rounded-md border px-3 py-2 text-left text-sm ${selected ? 'border-indigo-400 bg-indigo-50' : 'border-slate-200 hover:border-slate-400'}`}><span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded bg-slate-100 text-[10px] font-semibold text-slate-500">{String.fromCharCode(65 + optionIndex)}</span><span>{entry.text}</span></button>;
          })}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-8 gap-1 sm:grid-cols-10">
        {questions.map((item, index) => {
          const answered = selections[item.id] !== undefined;
          const flagged = reviewFlags?.[item.id];
          return <button key={item.id} onClick={() => onNavigate(index)} aria-label={`Go to question ${index + 1}`} className={`relative h-9 rounded border text-xs font-medium ${index === currentIndex ? 'border-slate-900 bg-slate-900 text-white' : answered ? 'border-indigo-200 bg-indigo-50 text-indigo-800' : 'border-slate-200 text-slate-500'}`}>{index + 1}{flagged && <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" />}</button>;
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3">
        <button disabled={currentIndex === 0} onClick={() => onNavigate(currentIndex - 1)} className="flex items-center gap-1 rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-600 disabled:opacity-35"><ChevronLeft size={15} /> Previous</button>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => onSubmit(false)} className="flex items-center gap-1 rounded-md border border-red-200 px-3 py-2 text-sm font-medium text-red-700"><TimerReset size={15} /> Submit exam</button>
          <button disabled={currentIndex === questions.length - 1} onClick={() => onNavigate(currentIndex + 1)} className="flex items-center gap-1 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white disabled:opacity-35">Next <ChevronRight size={15} /></button>
        </div>
      </div>

      {answeredCount < questions.length && <div className="mt-3 flex items-start gap-2 rounded-md border border-amber-200 bg-amber-50 p-2 text-xs text-amber-800"><AlertTriangle size={14} className="mt-0.5 shrink-0" /> {questions.length - answeredCount} unanswered question{questions.length - answeredCount === 1 ? '' : 's'} remain. You can still submit, but unanswered questions will score as incorrect.</div>}
    </div>
  );
}
