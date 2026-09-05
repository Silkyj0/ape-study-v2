import { AlertTriangle, CheckCircle2, Flag, ShieldCheck, Shuffle } from 'lucide-react';
import { auditQuestionBank } from '../lib/audit.js';
import { WITHHELD_QA_ITEMS } from '../data/qaMetadata.js';

export default function QualityDashboard({ questions, onToggleFlag }) {
  const report = auditQuestionBank(questions);
  const sourceQuestions = questions.filter((q) => q.seedId);
  const sourceReport = auditQuestionBank(sourceQuestions);
  const authoredQuestions = sourceQuestions.filter((q) => ['source-audited', 'drive-source-verified'].includes(q.qaStatus));
  const authoredReport = auditQuestionBank(authoredQuestions);
  const qa = sourceReport.qaCounts;

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">Question quality assurance</h2>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          QA is split into provenance and structural checks. The app preserves confirmed PARCS keys, records source-audited rewrites, tracks questions built directly from connected source readings, detects known review issues and lets you flag suspect items. It does not silently replace source material with general knowledge.
        </p>
      </div>

      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
        <div className="flex gap-2">
          <ShieldCheck size={18} className="mt-0.5 shrink-0 text-emerald-700" />
          <div>
            <p className="text-xs font-semibold text-emerald-900">Provenance QA is active</p>
            <p className="mt-1 text-xs leading-relaxed text-emerald-800">
              PARCS samples are locked to their supplied content. Retained Modules 1–2 questions preserve propositions from the earlier audited bank. Modules 3–4 questions are built directly from the connected Acumen readings and retain the exact Drive file reference used for verification.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <Metric label="Live seed questions" value={sourceReport.totalQuestions} />
        <Metric label="PARCS confirmed" value={qa['parcs-confirmed'] || 0} />
        <Metric label="Source-audited rewrites" value={qa['source-audited'] || 0} />
        <Metric label="Drive source verified" value={qa['drive-source-verified'] || 0} />
        <Metric label="Flagged by you" value={report.userFlagged.length} warning={report.userFlagged.length > 0} />
      </div>

      {(qa['legacy-placeholder'] || 0) > 0 && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
          <strong>{qa['legacy-placeholder']} later-module questions are still legacy placeholders.</strong> They remain visible only until the remaining modules are rebuilt from supplied source material and should not be treated as having the same QA status as the curated bank.
        </div>
      )}

      {WITHHELD_QA_ITEMS.length > 0 && (
        <div className="rounded-lg border border-slate-200 p-3">
          <div className="mb-2 flex items-center gap-2">
            <AlertTriangle size={16} className="text-amber-500" />
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-600">Withheld for source re-check</h3>
          </div>
          <div className="space-y-2">
            {WITHHELD_QA_ITEMS.map((item) => (
              <div key={item.id} className="rounded-md bg-slate-50 p-2">
                <div className="text-xs font-medium text-slate-800">{item.id} · Module {item.module}</div>
                <div className="mt-1 text-[11px] leading-relaxed text-slate-500">{item.reason}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
        <div className="flex gap-2">
          <Shuffle size={17} className="mt-0.5 shrink-0 text-emerald-700" />
          <div>
            <p className="text-xs font-semibold text-emerald-900">Question and answer shuffling is on</p>
            <p className="mt-1 text-xs leading-relaxed text-emerald-800">
              Eligible question order is shuffled for each session. Correct answer positions are balanced across A–D and distractors are independently shuffled. Stored source order and answer indexes are never mutated.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Structural audit · authored/verified exam bank</h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Metric label="Correct is longest" value={`${authoredReport.correctLongestPercent}%`} warning={authoredReport.correctLongestPercent > 40} />
          <Metric label="Length outliers" value={authoredReport.lengthOutliers} warning={authoredReport.lengthOutliers > 0} />
          <Metric label="Structurally flagged" value={authoredReport.flagged.length} warning={authoredReport.flagged.length > 0} />
          <Metric label="Info QA flags" value={sourceReport.informationFlagged.length} warning={sourceReport.informationFlagged.length > 0} />
        </div>
        <p className="mt-2 text-[10px] leading-relaxed text-slate-400">Immutable PARCS samples and provisional later-module placeholders are excluded from structural scoring.</p>
      </div>

      <div className="rounded-lg border border-slate-200 p-3">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-700">Stored answer positions · authored/verified exam bank</p>
            <p className="text-[11px] text-slate-400">Authoring audit only; students see shuffled positions.</p>
          </div>
          {authoredReport.positionBalanceWarning ? <AlertTriangle size={17} className="text-amber-500" /> : <CheckCircle2 size={17} className="text-emerald-500" />}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {authoredReport.letters.map((letter, i) => (
            <div key={letter} className="rounded-md bg-slate-50 p-2 text-center">
              <div className="text-xs font-semibold text-slate-800">{letter}</div>
              <div className="text-lg font-semibold text-slate-900">{authoredReport.positionPercentages[i]}%</div>
              <div className="text-[10px] text-slate-400">{authoredReport.positionCounts[i]} questions</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Verified/authored bank by module</h3>
        {authoredReport.modules.map((module) => (
          <div key={module.moduleId} className="rounded-lg border border-slate-200 p-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-800">Module {module.moduleId}</p>
                <p className="text-xs text-slate-400">{module.total} exam questions · {module.flagged} structurally flagged</p>
              </div>
              <div className="text-right text-[11px] text-slate-500">
                A {module.positionCounts[0]} · B {module.positionCounts[1]} · C {module.positionCounts[2]} · D {module.positionCounts[3]}
              </div>
            </div>
          </div>
        ))}
      </div>

      {report.userFlagged.length > 0 && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
          <div className="mb-2 flex items-center gap-2 text-amber-900"><Flag size={15} /><span className="text-xs font-semibold">Your QA review queue</span></div>
          <div className="space-y-2">
            {report.userFlagged.map((question) => (
              <div key={question.id} className="rounded-md bg-white/70 p-2 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-medium text-slate-800">M{question.moduleId} · {question.seedId || question.id}</div>
                    <div className="mt-1 line-clamp-2 text-slate-600">{question.prompt}</div>
                    <div className="mt-1 text-[10px] text-slate-400">{question.source}</div>
                  </div>
                  {onToggleFlag && <button onClick={() => onToggleFlag(question.id)} className="shrink-0 rounded border border-amber-300 px-2 py-1 text-[10px] font-medium text-amber-800">Clear flag</button>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {authoredReport.flagged.length > 0 && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
          Structural flags are rewrite prompts, not instructions to auto-change legal content. Source accuracy takes priority over making every option mechanically identical in length.
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
