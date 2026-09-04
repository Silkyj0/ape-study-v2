import { Trash2 } from 'lucide-react';
import { MODULES } from '../data/modules.js';
import PendingResolver from './PendingResolver.jsx';

export default function AddQuestionView({ form, setForm, formError, questions, onUpdateOption, onSubmit, onDelete, onResolve }) {
  const pending = questions.filter((q) => q.status === 'pending');
  const added = questions.filter((q) => q.source === 'From your notes' && q.status === 'ready');
  return <div className="space-y-3">
    <div>
      <h2 className="text-sm font-semibold text-slate-900">Add a question</h2>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">Manual additions remain separate from the vetted seed bank. New authored seed questions should follow Question Writing Standard v2 in the project documentation.</p>
    </div>

    <label className="block text-xs font-medium text-slate-600">Module</label>
    <select value={form.moduleId} onChange={(e) => setForm({ ...form, moduleId: Number(e.target.value) })} className="w-full rounded-md border border-slate-300 px-2 py-2 text-sm">
      {MODULES.map((module) => <option key={module.id} value={module.id}>M{String(module.id).padStart(2, '0')} · {module.title}</option>)}
    </select>

    <label className="block text-xs font-medium text-slate-600">Difficulty</label>
    <select value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value })} className="w-full rounded-md border border-slate-300 px-2 py-2 text-sm">
      <option value="foundation">Foundation</option><option value="exam">Exam</option><option value="challenge">Challenge</option>
    </select>

    <label className="block text-xs font-medium text-slate-600">Scenario (optional)</label>
    <textarea value={form.scenarioText} onChange={(e) => setForm({ ...form, scenarioText: e.target.value })} rows={3} className="w-full rounded-md border border-slate-300 px-2 py-2 text-sm" placeholder="Paste the scenario paragraph(s) here" />

    <label className="block text-xs font-medium text-slate-600">Question</label>
    <textarea value={form.prompt} onChange={(e) => setForm({ ...form, prompt: e.target.value })} rows={3} className="w-full rounded-md border border-slate-300 px-2 py-2 text-sm" placeholder="Paste the question text here" />

    <label className="flex items-center gap-2 text-xs text-slate-600">
      <input type="checkbox" checked={form.unknownAnswer} onChange={(e) => setForm({ ...form, unknownAnswer: e.target.checked })} />
      I don't have the answer key for this one yet
    </label>

    <label className="block text-xs font-medium text-slate-600">Options {form.unknownAnswer ? '' : '(select the correct one)'}</label>
    {form.options.map((option, index) => <div key={index} className="flex items-center gap-2">
      {!form.unknownAnswer && <input type="radio" checked={form.correct === index} onChange={() => setForm({ ...form, correct: index })} />}
      <input value={option} onChange={(e) => onUpdateOption(index, e.target.value)} className="flex-1 rounded-md border border-slate-300 px-2 py-1.5 text-sm" placeholder={`Option ${index + 1}`} />
    </div>)}

    <label className="block text-xs font-medium text-slate-600">Explanation {form.unknownAnswer ? '(optional, add later if you have it)' : ''}</label>
    <textarea value={form.explanation} onChange={(e) => setForm({ ...form, explanation: e.target.value })} rows={2} className="w-full rounded-md border border-slate-300 px-2 py-2 text-sm" placeholder="Why is this the correct answer?" />

    {formError && <p className="text-xs text-red-500">{formError}</p>}
    <button onClick={onSubmit} className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">Save question</button>

    {pending.length > 0 && <div className="mt-4 border-t border-slate-200 pt-4">
      <h3 className="mb-2 text-xs font-semibold text-slate-600">Awaiting answer key</h3>
      <p className="mb-2 text-xs text-slate-400">These won't appear in study mode until you set the correct answer.</p>
      {pending.map((q) => <PendingResolver key={q.id} q={q} onResolve={onResolve} onDelete={onDelete} />)}
    </div>}

    <div className="mt-4 border-t border-slate-200 pt-4">
      <h3 className="mb-2 text-xs font-semibold text-slate-600">Your added questions</h3>
      {added.length === 0 && <p className="text-xs text-slate-400">None yet.</p>}
      {added.map((q) => <div key={q.id} className="flex items-center justify-between border-b border-slate-100 py-1.5 text-xs">
        <span className="truncate pr-2">M{String(q.moduleId).padStart(2, '0')} · {q.prompt}</span>
        <button onClick={() => onDelete(q.id)} className="shrink-0 text-slate-400 hover:text-red-500"><Trash2 size={14} /></button>
      </div>)}
    </div>
  </div>;
}
