import { MODULES } from '../data/modules.js';
import { shuffleCopy } from './shuffle.js';

export const EXAM_QUESTION_COUNT = 40;
export const EXAM_DURATION_MINUTES = 60;
export const EXAM_DURATION_MS = EXAM_DURATION_MINUTES * 60 * 1000;

export const EXAM_QA_STATUSES = new Set([
  'parcs-confirmed',
  'source-audited',
  'drive-source-verified',
  'parc-external-verified',
]);

export function isExamEligible(question) {
  return question?.status === 'ready'
    && question.correct !== null
    && question.correct !== undefined
    && Array.isArray(question.options)
    && question.options.length >= 2
    && EXAM_QA_STATUSES.has(question.qaStatus);
}

export function getExamBank(questions) {
  return questions.filter(isExamEligible);
}

export function buildExamQuestionSet(questions, count = EXAM_QUESTION_COUNT) {
  const eligible = getExamBank(questions);
  if (eligible.length <= count) return shuffleCopy(eligible);

  const byModule = new Map(
    MODULES.map((module) => [
      module.id,
      shuffleCopy(eligible.filter((question) => question.moduleId === module.id)),
    ]),
  );

  const availableModules = MODULES
    .map((module) => module.id)
    .filter((moduleId) => (byModule.get(moduleId) || []).length > 0);

  if (!availableModules.length) return [];

  const base = Math.floor(count / availableModules.length);
  const remainder = count % availableModules.length;
  const extraModules = new Set(shuffleCopy(availableModules).slice(0, remainder));
  const selected = [];
  const selectedIds = new Set();

  availableModules.forEach((moduleId) => {
    const target = base + (extraModules.has(moduleId) ? 1 : 0);
    const picks = (byModule.get(moduleId) || []).slice(0, target);
    picks.forEach((question) => {
      selected.push(question);
      selectedIds.add(question.id);
    });
  });

  if (selected.length < count) {
    const remaining = shuffleCopy(eligible.filter((question) => !selectedIds.has(question.id)));
    selected.push(...remaining.slice(0, count - selected.length));
  }

  return shuffleCopy(selected.slice(0, count));
}

export function calculateExamResult(questions, selections, startedAt, submittedAt) {
  const items = questions.map((question, index) => {
    const selectedPresentationIndex = selections[question.id];
    const answered = selectedPresentationIndex !== undefined;
    const selectedSourceIndex = answered
      ? question.presentationOptions[selectedPresentationIndex]?.sourceIndex
      : null;
    const isCorrect = answered && selectedSourceIndex === question.correct;

    return {
      id: question.id,
      index,
      moduleId: question.moduleId,
      answered,
      isCorrect,
      selectedPresentationIndex: answered ? selectedPresentationIndex : null,
    };
  });

  const score = items.filter((item) => item.isCorrect).length;
  const unanswered = items.filter((item) => !item.answered).length;
  const moduleBreakdown = MODULES.map((module) => {
    const moduleItems = items.filter((item) => item.moduleId === module.id);
    if (!moduleItems.length) return null;
    const correct = moduleItems.filter((item) => item.isCorrect).length;
    return {
      moduleId: module.id,
      title: module.title,
      total: moduleItems.length,
      correct,
      percentage: Math.round((correct / moduleItems.length) * 100),
    };
  }).filter(Boolean);

  return {
    score,
    total: questions.length,
    percentage: questions.length ? Math.round((score / questions.length) * 100) : 0,
    unanswered,
    startedAt,
    submittedAt,
    timeSpentMs: Math.max(0, submittedAt - startedAt),
    items,
    moduleBreakdown,
  };
}

export function formatExamTime(ms) {
  const safe = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
