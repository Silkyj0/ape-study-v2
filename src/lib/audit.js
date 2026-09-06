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

function materialLengthClue(lengths, correctIndex) {
  const correctLength = lengths[correctIndex];
  const distractorLengths = lengths.filter((_, index) => index !== correctIndex);
  const maxDistractor = Math.max(...distractorLengths, 1);
  return correctLength === Math.max(...lengths)
    && lengths.filter((length) => length === correctLength).length === 1
    && correctLength > maxDistractor * 1.15
    && correctLength - maxDistractor >= 8;
}

export function auditQuestion(question) {
  const flags = [];
  const optionCount = Array.isArray(question.options) ? question.options.length : 0;
  const validOptionCount = optionCount === 4 || (question.answerFormat === 'true-false' && optionCount === 2);

  if (!validOptionCount) {
    flags.push({ type: 'options', severity: 'high', message: 'Question must have four MCQ options or two options for a true/false item.' });
    return flags;
  }

  if (question.correct === null || question.correct === undefined) return flags;

  if (question.correct < 0 || question.correct >= optionCount) {
    flags.push({ type: 'answer', severity: 'high', message: 'Correct-answer index is outside the available answer options.' });
    return flags;
  }

  const lengths = question.options.map(textLength);
  const correctLength = lengths[question.correct];
  const distractorLengths = lengths.filter((_, index) => index !== question.correct);
  const maxDistractor = Math.max(...distractorLengths, 1);

  if (materialLengthClue(lengths, question.correct)) {
    flags.push({
      type: 'correct-longest',
      severity: correctLength > maxDistractor * 1.3 && correctLength - maxDistractor >= 12 ? 'high' : 'medium',
      message: 'Correct option is materially longer than every distractor.',
    });
  }

  if (correctLength > maxDistractor * 1.45 && correctLength - maxDistractor >= 18) {
    flags.push({
      type: 'length-outlier',
      severity: 'high',
      message: 'Correct option is substantially longer than every distractor.',
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

export function auditInformationQuality(question) {
  const flags = [];
  const source = String(question.source || '').trim();
  const explanation = String(question.explanation || '').trim();

  if (!source || source.toLowerCase().includes('ai-drafted')) {
    flags.push({ type: 'source', severity: 'high', message: 'No reliable source provenance is recorded.' });
  }

  if (!explanation) {
    flags.push({ type: 'explanation', severity: 'medium', message: 'No post-answer explanation is recorded.' });
  }

  if (question.qaStatus === 'needs-source-check') {
    flags.push({ type: 'verification', severity: 'high', message: question.qaNote || 'Primary-source verification is required.' });
  }

  if (question.qaStatus === 'legacy-placeholder') {
    flags.push({ type: 'verification', severity: 'medium', message: 'Later-module placeholder has not yet completed the source-audited rewrite workflow.' });
  }

  if (question.flagged) {
    flags.push({ type: 'user-flag', severity: 'medium', message: 'Flagged during study for manual QA review.' });
  }

  return flags;
}

export function auditQuestionBank(questions) {
  const ready = questions.filter((q) => q.correct !== null && q.correct !== undefined);
  const positionCounts = [0, 0, 0, 0];
  let correctLongest = 0;
  let lengthOutliers = 0;
  const flagged = [];
  const informationFlagged = [];
  const qaCounts = {};

  ready.forEach((question) => {
    positionCounts[question.correct] += 1;
    const lengths = question.options.map(textLength);
    if (materialLengthClue(lengths, question.correct)) correctLongest += 1;

    const flags = auditQuestion(question);
    if (flags.some((flag) => flag.type === 'length-outlier')) lengthOutliers += 1;
    if (flags.length) flagged.push({ question, flags });
  });

  questions.forEach((question) => {
    const status = question.qaStatus || 'unknown';
    qaCounts[status] = (qaCounts[status] || 0) + 1;
    const flags = auditInformationQuality(question);
    if (flags.length) informationFlagged.push({ question, flags });
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
      const moduleInfoFlagged = moduleQuestions.filter((q) => auditInformationQuality(q).length > 0).length;
      return {
        moduleId,
        total: moduleQuestions.length,
        ready: moduleReady.length,
        flagged: moduleFlagged,
        informationFlagged: moduleInfoFlagged,
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
    informationFlagged,
    userFlagged: questions.filter((q) => q.flagged),
    qaCounts,
    modules,
    positionBalanceWarning: ready.length >= 12 && maxPositionDeviation > expectedPerPosition * 0.35,
    letters: LETTERS,
  };
}
