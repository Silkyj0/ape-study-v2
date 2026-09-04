const LETTERS = ['A', 'B', 'C', 'D'];

function textLength(value) {
  return String(value || '').trim().length;
}

function normalized(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function auditQuestion(question) {
  const flags = [];

  if (!Array.isArray(question.options) || question.options.length !== 4) {
    flags.push({ type: 'options', severity: 'high', message: 'Question does not have exactly four options.' });
    return flags;
  }

  if (question.correct === null || question.correct === undefined) return flags;

  if (question.correct < 0 || question.correct > 3) {
    flags.push({ type: 'answer', severity: 'high', message: 'Correct-answer index is outside A–D.' });
    return flags;
  }

  const lengths = question.options.map(textLength);
  const correctLength = lengths[question.correct];
  const distractorLengths = lengths.filter((_, index) => index !== question.correct);
  const maxDistractor = Math.max(...distractorLengths, 1);
  const averageDistractor = distractorLengths.reduce((sum, length) => sum + length, 0) / distractorLengths.length;
  const maxLength = Math.max(...lengths);

  if (correctLength === maxLength && lengths.filter((length) => length === maxLength).length === 1) {
    flags.push({
      type: 'correct-longest',
      severity: correctLength > maxDistractor * 1.3 && correctLength - maxDistractor >= 12 ? 'high' : 'medium',
      message: 'Correct option is uniquely the longest option.',
    });
  }

  if (correctLength > averageDistractor * 1.45 && correctLength - averageDistractor >= 18) {
    flags.push({
      type: 'length-outlier',
      severity: 'high',
      message: 'Correct option is substantially longer than the distractors.',
    });
  }

  const normalizedOptions = question.options.map(normalized);
  if (new Set(normalizedOptions).size !== normalizedOptions.length) {
    flags.push({ type: 'duplicate', severity: 'high', message: 'Two or more answer options are duplicates or near-identical after normalization.' });
  }

  const optionWordCounts = question.options.map((option) => normalized(option).split(/\s+/).filter(Boolean).length);
  if (Math.max(...optionWordCounts) >= Math.max(12, Math.min(...optionWordCounts) * 3)) {
    flags.push({ type: 'shape', severity: 'medium', message: 'Answer options have noticeably different grammatical/length shapes.' });
  }

  return flags;
}

export function auditQuestionBank(questions) {
  const ready = questions.filter((q) => q.correct !== null && q.correct !== undefined);
  const positionCounts = [0, 0, 0, 0];
  let correctLongest = 0;
  let lengthOutliers = 0;
  const flagged = [];

  ready.forEach((question) => {
    positionCounts[question.correct] += 1;
    const lengths = question.options.map(textLength);
    const correctLength = lengths[question.correct];
    if (correctLength === Math.max(...lengths)) correctLongest += 1;

    const flags = auditQuestion(question);
    if (flags.some((flag) => flag.type === 'length-outlier')) lengthOutliers += 1;
    if (flags.length) flagged.push({ question, flags });
  });

  const modules = [...new Set(questions.map((q) => q.module ?? q.moduleId))]
    .filter((moduleId) => moduleId !== undefined)
    .sort((a, b) => a - b)
    .map((moduleId) => {
      const moduleQuestions = questions.filter((q) => (q.module ?? q.moduleId) === moduleId);
      const moduleReady = moduleQuestions.filter((q) => q.correct !== null && q.correct !== undefined);
      const modulePositions = [0, 0, 0, 0];
      moduleReady.forEach((q) => { modulePositions[q.correct] += 1; });
      const moduleFlagged = moduleQuestions.filter((q) => auditQuestion(q).length > 0).length;
      return {
        moduleId,
        total: moduleQuestions.length,
        ready: moduleReady.length,
        flagged: moduleFlagged,
        positionCounts: modulePositions,
      };
    });

  const total = ready.length || 1;
  const expectedPerPosition = ready.length / 4;
  const maxPositionDeviation = Math.max(...positionCounts.map((count) => Math.abs(count - expectedPerPosition)));

  return {
    totalQuestions: questions.length,
    readyQuestions: ready.length,
    positionCounts,
    positionPercentages: positionCounts.map((count) => Math.round((count / total) * 100)),
    correctLongest,
    correctLongestPercent: Math.round((correctLongest / total) * 100),
    lengthOutliers,
    flagged,
    modules,
    positionBalanceWarning: ready.length >= 12 && maxPositionDeviation > expectedPerPosition * 0.35,
    letters: LETTERS,
  };
}
