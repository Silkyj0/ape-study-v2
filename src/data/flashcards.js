import { FLASHCARDS as CORE_FLASHCARDS } from './flashcardsCore.js';
import { EXPANDED_FLASHCARDS } from './flashcardsExpanded.js';
import { FLASHCARDS_M12 } from './flashcards/module12.js';
import { FLASHCARD_QA_OVERRIDES } from './flashcardQaOverrides.js';
import { ABIC_FLASHCARD_CROSS_REFS } from './abic/crossReferences.js';

export const FLASHCARD_SEED_VERSION = 3;
export const EXPECTED_FLASHCARD_COUNT = 185;

function applyQaAndAbic(card) {
  const base = {
    ...card,
    ...(FLASHCARD_QA_OVERRIDES[card.id] || {}),
  };
  const crossRef = ABIC_FLASHCARD_CROSS_REFS[card.id];
  if (!crossRef) return base;
  return {
    ...base,
    ...crossRef,
    sourceSection: `${base.sourceSection} · ABIC SW 2018 ${crossRef.contractRef} (p.${crossRef.contractPage})`,
  };
}

export const FLASHCARDS = [
  ...CORE_FLASHCARDS.map(applyQaAndAbic),
  ...EXPANDED_FLASHCARDS.map(applyQaAndAbic),
  ...FLASHCARDS_M12,
];

const flashcardIds = FLASHCARDS.map((card) => card.id);
const duplicateIds = flashcardIds.filter((id, index) => flashcardIds.indexOf(id) !== index);
const incompleteCards = FLASHCARDS.filter((card) => (
  !card.id
  || !Number.isInteger(card.module)
  || card.module < 1
  || card.module > 12
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
