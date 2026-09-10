import { CAA2024_SOURCE, caaReferencePage } from './contractMap.js';

export function caaQuestion({ id, prompt, options, correct, explanation, contractRef, learningTopic, difficulty = 'exam', scenarioText = null }) {
  const contractPage = caaReferencePage(contractRef);
  return {
    id,
    module: 13,
    prompt,
    options,
    correct,
    explanation,
    difficulty,
    scenarioText,
    learningTopic,
    source: `${CAA2024_SOURCE.name} · ${contractRef}${contractPage ? ` · p.${contractPage}` : ''}`,
    sourceKind: 'caa2024-contract',
    sourceFileId: CAA2024_SOURCE.fileId,
    sourceUrl: CAA2024_SOURCE.url,
    sourceCheckedOn: CAA2024_SOURCE.checkedOn,
    contractRef,
    contractPage,
  };
}

export function caaFlashcard({ id, topic, term, definition, sourceSection, contractRef = null, examples = [] }) {
  const contractPage = contractRef ? caaReferencePage(contractRef) : null;
  return {
    id,
    module: 13,
    topic,
    term,
    definition,
    examples,
    source: CAA2024_SOURCE.name,
    sourceSection,
    sourceKind: 'caa2024-contract',
    sourceFileId: CAA2024_SOURCE.fileId,
    sourceUrl: CAA2024_SOURCE.url,
    sourceCheckedOn: CAA2024_SOURCE.checkedOn,
    contractRef,
    contractPage,
  };
}
