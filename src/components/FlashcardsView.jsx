import { BookOpenCheck, CheckCircle2, ChevronLeft, Layers3, RotateCcw, Sparkles, XCircle } from 'lucide-react';
import { flashcardStats } from '../lib/flashcards.js';

function Stat({ label, value }) {
  return <div className="rounded-lg border border-slate-200 bg-white p-3"><div className="text-lg font-semibold text-slate-900">{value}</div><div className="text-[10px] uppercase tracking-wide text-slate-400">{label}</div></div>;
}

function moduleLabel(moduleId) {
  if (moduleId === 12) return 'Module 12 · ABIC supplementary';
  if (moduleId === 13) return 'Module 13 · CAA2024 supplementary';
  return `Module ${moduleId}`;
}

function moduleClasses(moduleId) {
  if (moduleId === 12) return 'border-violet-200 bg-violet-50/30';
  if (moduleId === 13) return 'border-teal-200 bg-teal-50/30';
  return 'border-slate-200';
}

function Dashboard({ cards, onStartAdaptive, onStartFull, onStartTopic }) {
  const overall = flashcardStats(cards);
  const modules = [...new Set(cards.map((card) => card.moduleId))].sort((a, b) => a - b);
  const topics = [...new Set(cards.map((card) => card.topic))].sort((a, b) => a.localeCompare(b));

  return <div>
    <div className="mb-5">
      <div className="flex items-center gap-2"><Layers3 size={20} className="text-indigo-600" /><h2 className="text-lg font-semibold text-slate-900">APE Flashcards</h2></div>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">Recall key APE terminology and contract mechanics before flipping. Modules 1–11 retain their supplied Acumen provenance; supplementary Modules 12 and 13 are sourced directly from ABIC SW 2018 and CAA2024 respectively.</p>
    </div>

    <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-5">
      <Stat label="Terms" value={overall.total} />
      <Stat label="New" value={overall.newCount} />
      <Stat label="Due" value={overall.due} />
      <Stat label="Learning" value={overall.learning} />
      <Stat label="Mastered" value={overall.mastered} />
    </div>

    <div className="mb-6 grid gap-3 sm:grid-cols-2">
      <button onClick={() => onStartAdaptive(null)} className="rounded-lg bg-slate-900 p-4 text-left text-white hover:bg-slate-800">
        <div className="flex items-center gap-2 text-sm font-semibold"><Sparkles size={16} /> Smart review</div>
        <p className="mt-1 text-[11px] leading-relaxed text-slate-300">Due terms first, then new terms. Up to 20 cards.</p>
      </button>
      <button onClick={() => onStartFull(null)} className="rounded-lg border border-slate-200 p-4 text-left hover:border-indigo-300 hover:bg-indigo-50/40">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900"><BookOpenCheck size={16} /> All terms</div>
        <p className="mt-1 text-[11px] leading-relaxed text-slate-500">Run through the complete current source-verified flashcard bank.</p>
      </button>
    </div>

    <div className="mb-6">
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">By module</h3>
      <div className="grid gap-2 sm:grid-cols-2">
        {modules.map((moduleId) => {
          const stats = flashcardStats(cards, moduleId);
          return <div key={moduleId} className={`rounded-lg border p-3 ${moduleClasses(moduleId)}`}>
            <div className="flex items-center justify-between gap-3">
              <div><div className="text-sm font-semibold text-slate-900">{moduleLabel(moduleId)}</div><div className="mt-0.5 text-[10px] text-slate-400">{stats.total} terms · {stats.due} due · {stats.mastered} mastered</div></div>
              <div className="flex gap-1.5">
                <button onClick={() => onStartAdaptive(moduleId)} className="rounded-md bg-slate-900 px-2.5 py-1.5 text-[10px] font-medium text-white">Review</button>
                <button onClick={() => onStartFull(moduleId)} className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-600 hover:bg-slate-50">All</button>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>

    <div>
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">By topic</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => {
          const count = cards.filter((card) => card.topic === topic).length;
          return <button key={topic} onClick={() => onStartTopic(topic)} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-800">{topic} <span className="text-slate-400">· {count}</span></button>;
        })}
      </div>
    </div>
  </div>;
}

function StudyCard({ card, index, total, flipped, onFlip, onRate, onEndSession }) {
  const examples = card.examples || [];
  return <div>
    <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
      <button onClick={onEndSession} className="flex items-center gap-1 hover:text-slate-800"><ChevronLeft size={14} /> Flashcards</button>
      <span>Card {index + 1} of {total}</span>
    </div>

    <button onClick={onFlip} className="block w-full text-left" aria-label={flipped ? 'Show term' : 'Show definition'}>
      <div className="relative min-h-[380px] w-full" style={{ perspective: '1200px' }}>
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', transition: 'transform 500ms ease' }}>
          <div className="absolute inset-0 flex min-h-[380px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm" style={{ backfaceVisibility: 'hidden' }}>
            <div className="mb-4 rounded-full bg-indigo-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-700">{moduleLabel(card.moduleId)} · {card.topic}</div>
            <h2 className="max-w-xl text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">{card.term}</h2>
            <p className="mt-6 flex items-center gap-1.5 text-xs text-slate-400"><RotateCcw size={13} /> Tap to reveal</p>
          </div>

          <div className="absolute inset-0 min-h-[380px] overflow-auto rounded-2xl border border-indigo-200 bg-indigo-50/30 p-6 shadow-sm" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <div className="mb-4 flex flex-wrap items-center gap-2"><span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-700">{card.term}</span><span className="text-[10px] text-slate-400">{moduleLabel(card.moduleId)} · {card.topic}</span></div>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Definition</div>
            <p className="mt-1 text-sm leading-relaxed text-slate-800">{card.definition}</p>

            {examples.length > 0 && <div className="mt-5">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Example{examples.length === 1 ? '' : 's'}</div>
              <ul className="mt-1 space-y-1.5 text-xs leading-relaxed text-slate-600">{examples.map((example, i) => <li key={i} className="flex gap-2"><span className="text-indigo-400">•</span><span>{example}</span></li>)}</ul>
            </div>}

            <div className="mt-6 border-t border-indigo-100 pt-4">
              <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Source</div>
              <div className="mt-1 text-xs font-medium text-slate-700">{card.source}</div>
              {card.sourceSection && <div className="mt-0.5 text-[10px] text-slate-500">Section: {card.sourceSection}</div>}
            </div>
            <p className="mt-4 flex items-center gap-1.5 text-[10px] text-slate-400"><RotateCcw size={12} /> Tap card to see the term again</p>
          </div>
        </div>
      </div>
    </button>

    {flipped ? <div className="mt-4">
      <p className="mb-2 text-center text-[11px] text-slate-500">How well could you recall this before flipping?</p>
      <div className="grid grid-cols-3 gap-2">
        <button onClick={() => onRate('didnt-know')} className="rounded-lg border border-red-200 bg-red-50 px-2 py-3 text-center text-red-800 hover:border-red-300"><XCircle size={16} className="mx-auto mb-1" /><div className="text-xs font-semibold">Didn’t know</div><div className="mt-0.5 text-[9px] opacity-70">Review soon</div></button>
        <button onClick={() => onRate('unsure')} className="rounded-lg border border-amber-200 bg-amber-50 px-2 py-3 text-center text-amber-900 hover:border-amber-300"><RotateCcw size={16} className="mx-auto mb-1" /><div className="text-xs font-semibold">Unsure</div><div className="mt-0.5 text-[9px] opacity-70">Needs another pass</div></button>
        <button onClick={() => onRate('knew')} className="rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-3 text-center text-emerald-800 hover:border-emerald-300"><CheckCircle2 size={16} className="mx-auto mb-1" /><div className="text-xs font-semibold">Knew it</div><div className="mt-0.5 text-[9px] opacity-70">Space it out</div></button>
      </div>
    </div> : <p className="mt-3 text-center text-[10px] text-slate-400">Try to define the term aloud or in your head before revealing it.</p>}
  </div>;
}

export default function FlashcardsView({ cards, queue, index, flipped, onFlip, onStartAdaptive, onStartFull, onStartTopic, onRate, onEndSession }) {
  if (!queue.length) return <Dashboard cards={cards} onStartAdaptive={onStartAdaptive} onStartFull={onStartFull} onStartTopic={onStartTopic} />;
  const card = queue[index];
  if (!card) return <Dashboard cards={cards} onStartAdaptive={onStartAdaptive} onStartFull={onStartFull} onStartTopic={onStartTopic} />;
  return <StudyCard card={card} index={index} total={queue.length} flipped={flipped} onFlip={onFlip} onRate={onRate} onEndSession={onEndSession} />;
}
