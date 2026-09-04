import { Download, Upload } from 'lucide-react';

export default function DataPanel({ data, storageBackend, onExport, onImport }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">Progress & portability</h2>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          The independent web version uses browser storage now and is ready for a later Supabase sync layer. Export/import gives you a safe bridge between environments in the meantime.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 p-3 text-xs text-slate-600">
        <div className="flex justify-between gap-4">
          <span>Storage currently in use</span>
          <span className="font-medium text-slate-800">{storageBackend || 'browser'}</span>
        </div>
        <div className="mt-2 flex justify-between gap-4">
          <span>Question-bank version</span>
          <span className="font-medium text-slate-800">{data.seedVersion}</span>
        </div>
        <div className="mt-2 flex justify-between gap-4">
          <span>Questions in progress file</span>
          <span className="font-medium text-slate-800">{data.questions.length}</span>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <button onClick={onExport} className="flex items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">
          <Download size={16} /> Export progress
        </button>
        <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
          <Upload size={16} /> Import progress
          <input
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onImport(file);
              e.target.value = '';
            }}
          />
        </label>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs leading-relaxed text-blue-900">
        When the app is moved to Supabase, the stable question IDs will let us sync each user's progress without moving the vetted question bank itself into the database.
      </div>
    </div>
  );
}
