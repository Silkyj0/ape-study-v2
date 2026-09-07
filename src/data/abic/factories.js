import { ABIC_SOURCE } from './contractMap.js';

export function abicQuestion({ id, prompt, options, correct, explanation, contractRef, contractPage, learningTopic, difficulty = 'exam', scenarioText = null }) {
  return {
    id,
    module: 12,
    prompt,
    options,
    correct,
    explanation,
    difficulty,
    scenarioText,
    learningTopic,
    source: `${ABIC_SOURCE.name} · ${contractRef} · p.${contractPage}`,
    sourceKind: 'abic-contract',
    sourceFileId: ABIC_SOURCE.fileId,
    sourceUrl: ABIC_SOURCE.url,
    sourceCheckedOn: ABIC_SOURCE.checkedOn,
    contractRef,
    contractPage,
  };
}

export function abicFlashcard({ id, topic, term, definition, sourceSection, contractRef = null, contractPage = null, examples = [] }) {
  return {
    id,
    module: 12,
    topic,
    term,
    definition,
    examples,
    source: ABIC_SOURCE.name,
    sourceSection,
    sourceKind: 'abic-contract',
    sourceFileId: ABIC_SOURCE.fileId,
    sourceUrl: ABIC_SOURCE.url,
    sourceCheckedOn: ABIC_SOURCE.checkedOn,
    contractRef,
    contractPage,
  };
}
