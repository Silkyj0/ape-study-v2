import { CAA2024_FLASHCARDS } from '../caa2024/flashcards.js';
import { CAA2024_ITEM_FLASHCARDS } from '../caa2024/flashcardsItems.js';

const TERM_REFINEMENTS = {
  'fc-m13-j-disputes': 'CAA2024 Section J — dispute process',
};

export const FLASHCARDS_M13 = [
  ...CAA2024_FLASHCARDS.map((card) => TERM_REFINEMENTS[card.id]
    ? { ...card, term: TERM_REFINEMENTS[card.id] }
    : card),
  ...CAA2024_ITEM_FLASHCARDS,
];
