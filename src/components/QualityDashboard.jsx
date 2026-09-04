import { AlertTriangle, CheckCircle2, Shuffle } from 'lucide-react';
import { auditQuestionBank } from '../lib/audit.js';

export default function QualityDashboard({ questions }) {
  const report = auditQuestionBank(questions);
  const sourceQuestions = questions.filter((q) => q.seedId || q.source !== 'From your notes');
  const sourceReport = auditQuestionBank(sourceQuestions);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">Question quality audit</h2>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          This checks structural clues in the bank. It does not decide whether a legal proposition is correct; source verification remains a separate review step.
        </p>
      </div>

      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
        <div className="flex gap-2">
          <Shuffle size={17} className="mt-0.5 shrink-0 text-emerald-700" />
          <div>
            <p className="text-xs font-semibold text-emerald-900">Runtime answer shuffling is on</p>
            <p className="mt-1 text-xs leading-relaxed text-emerald-800">
              Each study session balances the correct answer across A–D and independently shuffles the distractors. The original source order is preserved in the question bank.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Metric label="Questions" value={sourceReport.totalQuestions} />
        <Metric label="Correct is longest" value={`${sourceReport.correctLongestPercent}%`} warning={sourceReport.correctLongestPercent > 40} />
        <Metric label="Length outliers" value={sourceReport.lengthOutliers} warning={sourceReport.lengthOutliers > 0} />
        <Metric label="Flagged questions" value={sourceReport.flagged.length} warning={sourceReport.flagged.length > 0} />
      </div>

      <div className="rounded-lg border border-slate-200 p-3">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-700">Stored correct-answer positions</p>
            <p className="text-[11px] text-slate-400">Useful for auditing the authoring pattern; students will not see this fixed order.</p>
          </div>
          {sourceReport.positionBalanceWarning ? (
            <AlertTriangle size={17} className="text-amber-500" />
          ) : (
            <CheckCircle2 size={17} className="text-emerald-500" />
          )}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {sourceReport.letters.map((letter, i) => (
            <div key={letter} className="rounded-md bg-slate-50 p-2 text-center">
              <div className="text-xs font-semibold text-slate-800">{letter}</div>
              <div className="text-lg font-semibold text-slate-900">{sourceReport.positionPercentages[i]}%</div>
              <div className="text-[10px] text-slate-400">{sourceReport.positionCounts[i]} questions</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">By module</h3>
        {sourceReport.modules.map((module) => (
          <div key={module.moduleId} className="rounded-lg border border-slate-200 p-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-800">Module {module.moduleId}</p>
                <p className="text-xs text-slate-400">{module.total} questions · {module.flagged} structurally flagged</p>
              </div>
              <div className="text-right text-[11px] text-slate-500">
                A {module.positionCounts[0]} · B {module.positionCounts[1]} · C {module.positionCounts[2]} · D {module.positionCounts[3]}
              </div>
            </div>
          </div>
        ))}
      </div>

      {report.flagged.length > 0 && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
          These flags are a rewrite queue, not an instruction to auto-change answers. During the Module 1/2 re-audit, distractors should be rewritten from the actual source material and sample-question style rather than mechanically shortening the correct answer.
        </div>
      )}
    </div>
  );
}

function Metric({ label, value, warning = false }) {
  return (
    <div className={`rounded-lg border p-3 ${warning ? 'border-amber-200 bg-amber-50' : 'border-slate-200 bg-white'}`}>
      <div className="text-lg font-semibold text-slate-900">{value}</div>
      <div className="text-[11px] text-slate-500">{label}</div>
    </div>
  );
}
