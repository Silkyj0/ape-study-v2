import { EXPECTED_FLASHCARD_COUNT, FLASHCARDS } from '../src/data/flashcards.js';
import { FLASHCARD_QA_OVERRIDES } from '../src/data/flashcardQaOverrides.js';

const expectedByModule = {
  1: 10,
  2: 10,
  3: 8,
  4: 8,
  5: 8,
  6: 20,
  7: 7,
  8: 8,
  9: 15,
  10: 12,
  11: 7,
};

function fail(message) {
  console.error(`FLASHCARD QA FAILED: ${message}`);
  process.exit(1);
}

if (FLASHCARDS.length !== EXPECTED_FLASHCARD_COUNT) {
  fail(`expected ${EXPECTED_FLASHCARD_COUNT} cards, found ${FLASHCARDS.length}`);
}

const ids = FLASHCARDS.map((card) => card.id);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) fail(`duplicate IDs: ${[...new Set(duplicateIds)].join(', ')}`);

const normalizedTerms = FLASHCARDS.map((card) => card.term.trim().toLowerCase());
const duplicateTerms = normalizedTerms.filter((term, index) => normalizedTerms.indexOf(term) !== index);
if (duplicateTerms.length) fail(`duplicate recall terms: ${[...new Set(duplicateTerms)].join(', ')}`);

for (const card of FLASHCARDS) {
  if (!card.id || !/^fc-m(?:[1-9]|1[01])-/.test(card.id)) fail(`invalid seed ID: ${card.id || '(missing)'}`);
  if (!Number.isInteger(card.module) || card.module < 1 || card.module > 11) fail(`invalid module on ${card.id}`);
  if (!card.topic?.trim()) fail(`missing topic on ${card.id}`);
  if (!card.term?.trim()) fail(`missing term on ${card.id}`);
  if (!card.definition?.trim()) fail(`missing definition on ${card.id}`);
  if (card.definition.trim().length < 70) fail(`definition too thin on ${card.id}`);
  if (!card.source?.startsWith('Acumen — ')) fail(`non-Acumen or missing source on ${card.id}`);
  if (!card.sourceSection?.trim()) fail(`missing source section on ${card.id}`);
  if (!Array.isArray(card.examples || [])) fail(`examples must be an array on ${card.id}`);
}

for (const [module, expected] of Object.entries(expectedByModule)) {
  const actual = FLASHCARDS.filter((card) => card.module === Number(module)).length;
  if (actual !== expected) fail(`M${module} expected ${expected} cards, found ${actual}`);
}

for (const overrideId of Object.keys(FLASHCARD_QA_OVERRIDES)) {
  if (!ids.includes(overrideId)) fail(`QA override points to missing card ${overrideId}`);
}

console.log(`Flashcard QA passed: ${FLASHCARDS.length} cards, 11 modules, unique IDs/terms, complete Acumen provenance.`);
console.log(`Module distribution: ${Object.entries(expectedByModule).map(([module, count]) => `M${module}=${count}`).join(', ')}`);
