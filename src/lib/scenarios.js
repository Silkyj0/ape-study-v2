export function getParcsScenarioMeta(question) {
  const id = question?.seedId || question?.id || '';
  const match = id.match(/^m(\d+)-sc(\d+)-(\d+)$/);
  if (!match) return null;

  const moduleId = Number(match[1]);
  const scenarioCode = match[2];
  const questionNumber = Number(match[3]);
  const modulePrefix = String(moduleId);
  const scenarioNumber = scenarioCode.startsWith(modulePrefix)
    ? scenarioCode.slice(modulePrefix.length) || '1'
    : scenarioCode;

  return {
    key: `m${moduleId}-sc${scenarioCode}`,
    moduleId,
    scenarioCode,
    scenarioNumber,
    questionNumber,
    label: `${moduleId}.${scenarioNumber}`,
  };
}

export function getParcsScenarioGroups(questions) {
  const groups = new Map();

  questions
    .filter((question) => question.qaStatus === 'parcs-confirmed' && question.status === 'ready')
    .forEach((question) => {
      const meta = getParcsScenarioMeta(question);
      if (!meta) return;
      if (!groups.has(meta.key)) {
        groups.set(meta.key, {
          ...meta,
          scenarioText: question.scenarioText || null,
          questions: [],
        });
      }
      const group = groups.get(meta.key);
      if (!group.scenarioText && question.scenarioText) group.scenarioText = question.scenarioText;
      group.questions.push(question);
    });

  return [...groups.values()]
    .map((group) => ({
      ...group,
      questions: [...group.questions].sort((a, b) => {
        const aMeta = getParcsScenarioMeta(a);
        const bMeta = getParcsScenarioMeta(b);
        return (aMeta?.questionNumber || 0) - (bMeta?.questionNumber || 0);
      }),
    }))
    .filter((group) => group.questions.length >= 2)
    .sort((a, b) => a.moduleId - b.moduleId || Number(a.scenarioCode) - Number(b.scenarioCode));
}
