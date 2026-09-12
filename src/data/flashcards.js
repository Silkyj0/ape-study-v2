import { FLASHCARDS as CORE_FLASHCARDS } from './flashcardsCore.js';
import { EXPANDED_FLASHCARDS } from './flashcardsExpanded.js';
import { ADVANCED_FLASHCARDS_CORE } from './flashcardsAdvanced.js';
import { ADVANCED_FLASHCARD_REFINEMENTS } from './flashcardsAdvancedRefinements.js';
import { FLASHCARDS_M12 } from './flashcards/module12.js';
import { FLASHCARDS_M13 } from './flashcards/module13.js';
import { FLASHCARD_QA_OVERRIDES } from './flashcardQaOverrides.js';
import { ABIC_FLASHCARD_CROSS_REFS } from './abic/crossReferences.js';
import { CAA2024_FLASHCARD_CROSS_REFS } from './caa2024/crossReferences.js';

export const FLASHCARD_SEED_VERSION = 5;
export const EXPECTED_FLASHCARD_COUNT = 322;

function applyQaAndContractRefs(card) {
  let next = {
    ...card,
    ...(FLASHCARD_QA_OVERRIDES[card.id] || {}),
    ...(ADVANCED_FLASHCARD_REFINEMENTS[card.id] || {}),
  };

  const abicRef = ABIC_FLASHCARD_CROSS_REFS[card.id];
  if (abicRef) {
    next = {
      ...next,
      ...abicRef,
      sourceSection: `${next.sourceSection} · ABIC SW 2018 ${abicRef.contractRef} (p.${abicRef.contractPage})`,
    };
  }

  const caaRef = CAA2024_FLASHCARD_CROSS_REFS[card.id];
  if (caaRef) {
    next = {
      ...next,
      ...caaRef,
      sourceSection: `${next.sourceSection} · CAA2024 ${caaRef.caaContractRef}${caaRef.caaContractPage ? ` (p.${caaRef.caaContractPage})` : ''}`,
    };
  }

  return next;
}

export const FLASHCARDS = [
  ...CORE_FLASHCARDS.map(applyQaAndContractRefs),
  ...EXPANDED_FLASHCARDS.map(applyQaAndContractRefs),
  ...ADVANCED_FLASHCARDS_CORE.map(applyQaAndContractRefs),
  ...FLASHCARDS_M12,
  ...FLASHCARDS_M13,
];

const flashcardIds = FLASHCARDS.map((card) => card.id);
const duplicateIds = flashcardIds.filter((id, index) => flashcardIds.indexOf(id) !== index);
const incompleteCards = FLASHCARDS.filter((card) => (
  !card.id
  || !Number.isInteger(card.module)
  || card.module < 1
  || card.module > 13
  || !card.topic
  || !card.term
  || !card.definition
  || !card.source
  || !card.sourceSection
));

if (FLASHCARDS.length !== EXPECTED_FLASHCARD_COUNT) {
  throw new Error(`Flashcard bank expected ${EXPECTED_FLASHCARD_COUNT} cards but found ${FLASHCARDS.length}.`);
}
if (duplicateIds.length) {
  throw new Error(`Duplicate flashcard seed IDs: ${[...new Set(duplicateIds)].join(', ')}`);
}
if (incompleteCards.length) {
  throw new Error(`Incomplete flashcard records: ${incompleteCards.map((card) => card.id || '(missing id)').join(', ')}`);
}
