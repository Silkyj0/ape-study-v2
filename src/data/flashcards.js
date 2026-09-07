import { FLASHCARDS as CORE_FLASHCARDS } from './flashcardsCore.js';
import { EXPANDED_FLASHCARDS } from './flashcardsExpanded.js';
import { FLASHCARD_QA_OVERRIDES } from './flashcardQaOverrides.js';

export const FLASHCARD_SEED_VERSION = 2;
export const EXPECTED_FLASHCARD_COUNT = 113;

function applyQaOverride(card) {
  return {
    ...card,
    ...(FLASHCARD_QA_OVERRIDES[card.id] || {}),
  };
}

export const FLASHCARDS = [
  ...CORE_FLASHCARDS.map(applyQaOverride),
  ...EXPANDED_FLASHCARDS.map(applyQaOverride),
];

const flashcardIds = FLASHCARDS.map((card) => card.id);
const duplicateIds = flashcardIds.filter((id, index) => flashcardIds.indexOf(id) !== index);
const incompleteCards = FLASHCARDS.filter((card) => (
  !card.id
  || !Number.isInteger(card.module)
  || card.module < 1
  || card.module > 11
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
