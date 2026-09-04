import { useState } from 'react';

export default function PendingResolver({ q, onResolve, onDelete }) {
  const [correct, setCorrect] = useState(null);
  const [explanation, setExplanation] = useState(q.explanation || '');
  const [err, setErr] = useState('');

  function save() {
    if (correct === null) {
      setErr('Select the correct option first.');
      return;
    }
    setErr('');
    onResolve(q.id, correct, explanation.trim());
  }

  return (
    <div className="mb-2 rounded-md border border-slate-200 p-3">
      <p className="mb-2 text-xs font-medium text-slate-800">
        M{String(q.moduleId).padStart(2, '0')} · {q.prompt}
      </p>
      <div className="mb-2 space-y-1">
        {q.options.map((opt, i) => (
          <label key={i} className="flex items-start gap-2 text-xs text-slate-600">
            <input className="mt-0.5" type="radio" checked={correct === i} onChange={() => setCorrect(i)} />
            <span>{opt}</span>
          </label>
        ))}
      </div>
      <textarea
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        rows={2}
        className="mb-2 w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs"
        placeholder="Explanation (optional)"
      />
      {err && <p className="mb-2 text-xs text-red-500">{err}</p>}
      <div className="flex gap-2">
        <button onClick={save} className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white">
          Mark ready
        </button>
        <button onClick={() => onDelete(q.id)} className="px-2 text-xs text-slate-400 hover:text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
}
