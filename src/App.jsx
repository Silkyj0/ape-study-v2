import { useCallback, useEffect, useState } from 'react';
import { AlertCircle, BarChart3, BookOpen, Database, FlaskConical, Loader2, Plus, ShieldCheck } from 'lucide-react';
import { SEED_VERSION } from './data/questions.js';
import AddQuestionView from './components/AddQuestionView.jsx';
import DashboardView from './components/DashboardView.jsx';
import DataPanel from './components/DataPanel.jsx';
import ModulesView from './components/ModulesView.jsx';
import ParcsView from './components/ParcsView.jsx';
import QualityDashboard from './components/QualityDashboard.jsx';
import ScenarioStudyView from './components/ScenarioStudyView.jsx';
import StudyView from './components/StudyView.jsx';
import {
  MAX_SAME_SESSION_RETRIES,
  MIXED_SESSION_LIMIT,
  MODULE_SESSION_LIMIT,
  SAME_SESSION_RETRY_GAP,
  answerScheduleFeedback,
  applyAnswerResult,
  applyLowConfidence,
  buildAdaptiveSession,
  buildCalibrationFocusSession,
  buildFocusSession,
  lowConfidenceFeedback,
} from './lib/learning.js';
import { reconcile, uid } from './lib/progress.js';
import { getParcsScenarioGroups } from './lib/scenarios.js';
import { prepareRepeatQuestion, prepareScenarioQueue, prepareStudyQueue } from './lib/shuffle.js';
import { downloadProgress, parseProgressFile, readStoredProgress, writeStoredProgress } from './lib/storage.js';

const EMPTY_FORM = { moduleId: 1, scenarioText: '', prompt: '', options: ['', '', '', ''], correct: 0, unknownAnswer: false, explanation: '', difficulty: 'exam' };

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saveError, setSaveError] = useState(null);
  const [notice, setNotice] = useState(null);
  const [storageBackend, setStorageBackend] = useState(null);
  const [view, setView] = useState('modules');
  const [studyReturnView, setStudyReturnView] = useState('modules');
  const [queue, setQueue] = useState([]);
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionRetryCounts, setSessionRetryCounts] = useState({});
  const [answerFeedback, setAnswerFeedback] = useState(null);
  const [confidenceMarked, setConfidenceMarked] = useState(false);
  const [scenarioSession, setScenarioSession] = useState(null);
  const [scenarioSelections, setScenarioSelections] = useState({});
  const [scenarioSubmitted, setScenarioSubmitted] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [formError, setFormError] = useState('');

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      const res = await readStoredProgress();
      setStorageBackend(res.backend);
      if (res.value) {
        const parsed = JSON.parse(res.value);
        const next = parsed.seedVersion !== SEED_VERSION ? reconcile(parsed) : parsed;
        setData(next);
        if (next !== parsed) setStorageBackend((await writeStoredProgress(JSON.stringify(next))).backend);
      } else {
        const next = reconcile({ questions: [] });
        setData(next);
        setStorageBackend((await writeStoredProgress(JSON.stringify(next))).backend);
      }
    } catch {
      setData(reconcile({ questions: [] }));
      setSaveError('Existing progress could not be read. A fresh local copy has been opened.');
    } finally { setLoading(false); }
  }

  const persist = useCallback(async (next) => {
    setData(next);
    try {
      const saved = await writeStoredProgress(JSON.stringify(next));
      setStorageBackend(saved.backend);
      setSaveError(saved.ok ? null : 'Progress could not be saved.');
    } catch { setSaveError('Progress could not be saved.'); }
  }, []);

  function beginQueue(questions, returnView = 'modules') {
    if (!questions.length) return false;
    setQueue(prepareStudyQueue(questions));
    setQIdx(0);
    setSelected(null);
    setRevealed(false);
    setSessionCorrect(0);
    setSessionRetryCounts({});
    setAnswerFeedback(null);
    setConfidenceMarked(false);
    setStudyReturnView(returnView);
    setView('study');
    return true;
  }

  function startStudy(moduleId) {
    const pool = data.questions.filter((q) => q.moduleId === moduleId && q.status === 'ready');
    const session = buildAdaptiveSession(pool, MODULE_SESSION_LIMIT);
    if (!beginQueue(session, 'modules')) {
      setNotice('Nothing is due in this module right now. Mastered questions are snoozed until their next review date.');
    }
  }

  function startSmartReview() {
    const pool = data.questions.filter((q) => q.status === 'ready');
    const session = buildAdaptiveSession(pool, MODULE_SESSION_LIMIT);
    if (!beginQueue(session, 'modules')) setNotice('Nothing is due and there are no unseen questions available.');
  }

  function startRevisedExamBank() {
    const revisedSet = data.questions.filter((q) => ['source-audited', 'drive-source-verified'].includes(q.qaStatus) && q.status === 'ready');
    const session = buildAdaptiveSession(revisedSet, MIXED_SESSION_LIMIT);
    if (!beginQueue(session, 'modules')) setNotice('Nothing is due in the verified exam bank right now.');
  }

  function startParcsMixed() {
    const pool = data.questions.filter((q) => q.qaStatus === 'parcs-confirmed' && q.status === 'ready');
    const session = buildAdaptiveSession(pool, MIXED_SESSION_LIMIT);
    if (!beginQueue(session, 'parcs')) setNotice('Nothing is due in the PARCS sample bank right now. Use a module full set to revisit snoozed samples.');
  }

  function startParcsModule(moduleId) {
    const pool = data.questions.filter((q) => q.qaStatus === 'parcs-confirmed' && q.moduleId === moduleId && q.status === 'ready');
    if (!beginQueue(pool, 'parcs')) setNotice(`No PARCS supplied questions are available for Module ${moduleId}.`);
  }

  function startParcsScenario(scenarioKey) {
    const scenario = getParcsScenarioGroups(data.questions).find((group) => group.key === scenarioKey);
    if (!scenario) {
      setNotice('That PARCS scenario could not be found.');
      return;
    }

    setScenarioSession({ ...scenario, questions: prepareScenarioQueue(scenario.questions) });
    setScenarioSelections({});
    setScenarioSubmitted(false);
    setView('scenario-study');
  }

  function selectScenarioAnswer(questionId, presentationIndex) {
    if (scenarioSubmitted) return;
    setScenarioSelections((current) => ({ ...current, [questionId]: presentationIndex }));
  }

  async function submitScenario() {
    if (!scenarioSession || scenarioSubmitted) return;
    if (scenarioSession.questions.some((question) => scenarioSelections[question.id] === undefined)) return;

    const updates = new Map();
    scenarioSession.questions.forEach((question) => {
      const selectedPresentationIndex = scenarioSelections[question.id];
      const selectedSourceIndex = question.presentationOptions[selectedPresentationIndex].sourceIndex;
      const isCorrect = selectedSourceIndex === question.correct;
      const current = data.questions.find((item) => item.id === question.id) || question;
      updates.set(question.id, { ...current, ...applyAnswerResult(current, isCorrect) });
    });

    const nextQuestions = data.questions.map((question) => updates.get(question.id) || question);
    setScenarioSubmitted(true);
    await persist({ ...data, questions: nextQuestions });
  }

  function finishScenario() {
    setScenarioSession(null);
    setScenarioSelections({});
    setScenarioSubmitted(false);
    setView('parcs');
  }

  function startFocusArea(topic) {
    const session = buildFocusSession(data.questions, topic);
    if (!beginQueue(session, 'dashboard')) setNotice(`No ready questions are available for ${topic}.`);
  }

  function startCalibrationFocus(patternId) {
    const session = buildCalibrationFocusSession(data.questions, patternId);
    if (!beginQueue(session, 'dashboard')) setNotice('No ready questions are available for this PARCS calibration pattern.');
  }

  function answer(presentationIndex) {
    if (revealed) return;
    const question = queue[qIdx];
    const selectedSourceIndex = question.presentationOptions[presentationIndex].sourceIndex;
    const isCorrect = selectedSourceIndex === question.correct;
    setSelected(presentationIndex);
    setRevealed(true);
    setConfidenceMarked(false);
    if (isCorrect) setSessionCorrect((count) => count + 1);

    const current = data.questions.find((item) => item.id === question.id) || question;
    const progress = applyAnswerResult(current, isCorrect);
    const updatedQuestion = { ...current, ...progress };

    let retryQueued = false;
    if (!isCorrect) {
      const retryCount = sessionRetryCounts[question.id] || 0;
      if (retryCount < MAX_SAME_SESSION_RETRIES) {
        retryQueued = true;
        setSessionRetryCounts((counts) => ({ ...counts, [question.id]: retryCount + 1 }));
        const repeat = prepareRepeatQuestion(updatedQuestion);
        setQueue((items) => {
          const next = [...items];
          const insertAt = Math.min(qIdx + SAME_SESSION_RETRY_GAP + 1, next.length);
          next.splice(insertAt, 0, repeat);
          return next;
        });
      }
    }

    setAnswerFeedback(answerScheduleFeedback(updatedQuestion, isCorrect, retryQueued));
    const nextQuestions = data.questions.map((item) => item.id === question.id ? updatedQuestion : item);
    persist({ ...data, questions: nextQuestions });
  }

  async function markLowConfidence() {
    if (!revealed || confidenceMarked) return;
    const question = queue[qIdx];
    if (selected !== question.presentationCorrect) return;

    const current = data.questions.find((item) => item.id === question.id) || question;
    const updatedQuestion = applyLowConfidence(current);
    const nextQuestions = data.questions.map((item) => item.id === question.id ? updatedQuestion : item);

    setConfidenceMarked(true);
    setAnswerFeedback(lowConfidenceFeedback());
    setQueue((items) => items.map((item, index) => index === qIdx ? { ...item, ...updatedQuestion } : item));
    await persist({ ...data, questions: nextQuestions });
  }

  async function toggleFlag(id) {
    let nextFlagged = false;
    const nextQuestions = data.questions.map((item) => {
      if (item.id !== id) return item;
      nextFlagged = !item.flagged;
      return { ...item, flagged: nextFlagged, flaggedAt: nextFlagged ? Date.now() : null };
    });
    setQueue((items) => items.map((item) => item.id === id ? { ...item, flagged: nextFlagged, flaggedAt: nextFlagged ? Date.now() : null } : item));
    setScenarioSession((session) => session ? {
      ...session,
      questions: session.questions.map((item) => item.id === id ? { ...item, flagged: nextFlagged, flaggedAt: nextFlagged ? Date.now() : null } : item),
    } : session);
    await persist({ ...data, questions: nextQuestions });
  }

  function nextCard() {
    if (qIdx + 1 < queue.length) {
      setQIdx((index) => index + 1);
      setSelected(null);
      setRevealed(false);
      setAnswerFeedback(null);
      setConfidenceMarked(false);
    } else setView(studyReturnView);
  }

  function updateOption(index, value) {
    const options = [...form.options]; options[index] = value; setForm({ ...form, options });
  }

  async function submitForm() {
    if (!form.prompt.trim()) return setFormError('Enter a question.');
    if (form.options.some((option) => !option.trim())) return setFormError('Fill in all four options.');
    setFormError('');
    const question = {
      id: uid(), moduleId: form.moduleId, scenarioText: form.scenarioText.trim() || null, prompt: form.prompt.trim(), options: form.options.map((option) => option.trim()), correct: form.unknownAnswer ? null : form.correct, explanation: form.explanation.trim(), source: 'From your notes', difficulty: form.difficulty, status: form.unknownAnswer ? 'pending' : 'ready', qaStatus: 'user-added', qaLabel: 'User-added', qaNote: 'Manually added question. Verify against the source material you used to create it.', flagged: false, flaggedAt: null, level: 0, due: 0, seen: 0, correctCount: 0, correctStreak: 0, lapseCount: 0, recentResults: [], recentConfidence: [], lowConfidenceCount: 0, lastResult: null, lastConfidence: null, lastConfidenceAt: null, lastAnsweredAt: null, learningTopic: 'Your notes',
    };
    await persist({ ...data, questions: [...data.questions, question] });
    setForm({ ...EMPTY_FORM, moduleId: form.moduleId, scenarioText: form.scenarioText, difficulty: form.difficulty, unknownAnswer: form.unknownAnswer });
  }

  async function deleteQuestion(id) { await persist({ ...data, questions: data.questions.filter((q) => q.id !== id) }); }
  async function resolveAnswer(id, correct, explanation) {
    await persist({ ...data, questions: data.questions.map((q) => q.id === id ? { ...q, correct, explanation: explanation || q.explanation, status: 'ready' } : q) });
  }

  async function importProgress(file) {
    try {
      const imported = await parseProgressFile(file);
      if (!Array.isArray(imported?.questions)) throw new Error('No question progress found.');
      await persist(reconcile(imported));
      setNotice(`Progress imported successfully and reconciled to question-bank version ${SEED_VERSION}.`);
      setView('modules');
    } catch (error) { setNotice(`Import failed: ${error.message || 'invalid progress file'}`); }
  }

  if (loading || !data) return <div className="flex min-h-screen items-center justify-center p-12 text-slate-500"><Loader2 className="mr-2 animate-spin" size={20} /> Loading your progress...</div>;
  const currentQuestion = queue[qIdx];
  const nav = [
    ['modules', BookOpen, 'Modules'], ['parcs', ShieldCheck, 'PARCS'], ['add', Plus, 'Add'], ['dashboard', BarChart3, 'Stats'], ['quality', FlaskConical, 'Quality'], ['data', Database, 'Data'],
  ];

  return <div className="min-h-screen bg-slate-50 text-slate-800"><div className="mx-auto min-h-screen max-w-3xl bg-white shadow-sm">
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur"><div className="flex items-center justify-between gap-3">
      <div><h1 className="text-base font-semibold text-slate-900">APE Part 2 study</h1><p className="text-xs text-slate-500">adaptive review · scenario practice · confidence-aware mastery · weak-area focus · PARCS trap drills · provenance QA</p></div>
      <nav className="flex gap-1">{nav.map(([key, Icon, label]) => <button key={key} onClick={() => setView(key)} className={`flex flex-col items-center rounded px-2 py-1 text-[10px] sm:text-xs ${view === key ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'}`}><Icon size={16} /><span className="hidden sm:inline">{label}</span></button>)}</nav>
    </div></header>
    <main className="p-4 sm:p-5">
      {saveError && <div className="mb-3 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-2 text-xs text-red-700"><AlertCircle size={15} className="mt-0.5 shrink-0" /> {saveError}</div>}
      {notice && <div className="mb-3 flex items-start justify-between gap-3 rounded-md border border-blue-200 bg-blue-50 p-2 text-xs text-blue-800"><span>{notice}</span><button onClick={() => setNotice(null)} className="font-medium">×</button></div>}
      {view === 'modules' && <ModulesView questions={data.questions} onStart={startStudy} onSmartReview={startSmartReview} onCalibration={startRevisedExamBank} />}
      {view === 'parcs' && <ParcsView questions={data.questions} onStartMixed={startParcsMixed} onStartModule={startParcsModule} onStartScenario={startParcsScenario} />}
      {view === 'scenario-study' && scenarioSession && <ScenarioStudyView scenario={scenarioSession} selections={scenarioSelections} submitted={scenarioSubmitted} onSelect={selectScenarioAnswer} onSubmit={submitScenario} onFinish={finishScenario} onExit={finishScenario} onToggleFlag={toggleFlag} />}
      {view === 'study' && currentQuestion && <StudyView question={currentQuestion} index={qIdx} total={queue.length} sessionCorrect={sessionCorrect} selected={selected} revealed={revealed} answerFeedback={answerFeedback} confidenceMarked={confidenceMarked} onAnswer={answer} onLowConfidence={markLowConfidence} onNext={nextCard} onExit={() => setView(studyReturnView)} onToggleFlag={toggleFlag} />}
      {view === 'add' && <AddQuestionView form={form} setForm={setForm} formError={formError} questions={data.questions} onUpdateOption={updateOption} onSubmit={submitForm} onDelete={deleteQuestion} onResolve={resolveAnswer} />}
      {view === 'dashboard' && <DashboardView questions={data.questions} onStartFocus={startFocusArea} onStartCalibrationFocus={startCalibrationFocus} />}
      {view === 'quality' && <QualityDashboard questions={data.questions} onToggleFlag={toggleFlag} />}
      {view === 'data' && <DataPanel data={data} storageBackend={storageBackend} onExport={() => downloadProgress(data)} onImport={importProgress} />}
    </main>
  </div></div>;
}
