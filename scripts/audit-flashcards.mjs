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
  12: 72,
  13: 54,
};

function fail(message) {
  console.error(`FLASHCARD QA FAILED: ${message}`);
  process.exit(1);
}

if (FLASHCARDS.length !== EXPECTED_FLASHCARD_COUNT) fail(`expected ${EXPECTED_FLASHCARD_COUNT} cards, found ${FLASHCARDS.length}`);

const ids = FLASHCARDS.map((card) => card.id);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) fail(`duplicate IDs: ${[...new Set(duplicateIds)].join(', ')}`);

const normalizedTerms = FLASHCARDS.map((card) => card.term.trim().toLowerCase());
const duplicateTerms = normalizedTerms.filter((term, index) => normalizedTerms.indexOf(term) !== index);
if (duplicateTerms.length) fail(`duplicate recall terms: ${[...new Set(duplicateTerms)].join(', ')}`);

for (const card of FLASHCARDS) {
  if (!card.id || !/^fc-m(?:[1-9]|1[0-3])-/.test(card.id)) fail(`invalid seed ID: ${card.id || '(missing)'}`);
  if (!Number.isInteger(card.module) || card.module < 1 || card.module > 13) fail(`invalid module on ${card.id}`);
  if (!card.topic?.trim()) fail(`missing topic on ${card.id}`);
  if (!card.term?.trim()) fail(`missing term on ${card.id}`);
  if (!card.definition?.trim()) fail(`missing definition on ${card.id}`);
  if (card.definition.trim().length < 70) fail(`definition too thin on ${card.id}`);
  if (!card.sourceSection?.trim()) fail(`missing source section on ${card.id}`);
  if (!Array.isArray(card.examples || [])) fail(`examples must be an array on ${card.id}`);

  if (card.module === 12) {
    if (card.source !== 'ABIC SW 2018 — Simple Works Contract') fail(`invalid ABIC source on ${card.id}`);
    if (card.sourceKind !== 'abic-contract') fail(`missing ABIC source kind on ${card.id}`);
    if (!Number.isInteger(card.contractPage) || card.contractPage < 1 || card.contractPage > 56) fail(`invalid ABIC page on ${card.id}`);
  } else if (card.module === 13) {
    if (card.source !== 'CAA2024 — Client Architect Agreement') fail(`invalid CAA2024 source on ${card.id}`);
    if (card.sourceKind !== 'caa2024-contract') fail(`missing CAA2024 source kind on ${card.id}`);
    if (!card.contractRef) fail(`missing CAA2024 reference on ${card.id}`);
  } else if (!card.source?.startsWith('Acumen — ')) {
    fail(`non-Acumen or missing primary source on ${card.id}`);
  }
}

for (const [module, expected] of Object.entries(expectedByModule)) {
  const actual = FLASHCARDS.filter((card) => card.module === Number(module)).length;
  if (actual !== expected) fail(`M${module} expected ${expected} cards, found ${actual}`);
}

for (const overrideId of Object.keys(FLASHCARD_QA_OVERRIDES)) {
  if (!ids.includes(overrideId)) fail(`QA override points to missing card ${overrideId}`);
}

console.log(`Flashcard QA passed: ${FLASHCARDS.length} cards across M1–M13, unique IDs/terms and source-specific provenance.`);
console.log(`Module distribution: ${Object.entries(expectedByModule).map(([module, count]) => `M${module}=${count}`).join(', ')}`);
