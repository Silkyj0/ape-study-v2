import { CAA2024_FLASHCARD_CROSS_REFS, CAA2024_QUESTION_CROSS_REFS } from '../src/data/caa2024/crossReferences.js';
import {
  CAA2024_DEFINITIONS,
  CAA2024_ITEMS,
  CAA2024_PROVISIONS,
  CAA2024_SCHEDULES,
  CAA2024_SECTIONS,
  CAA2024_SOURCE,
  caaReferencePage,
  isValidCaa2024Ref,
} from '../src/data/caa2024/contractMap.js';
import { module13Questions } from '../src/data/module13.js';
import { FLASHCARDS_M13 } from '../src/data/flashcards/module13.js';

function fail(message) {
  console.error(`CAA2024 QA FAILED: ${message}`);
  process.exit(1);
}

if (CAA2024_SECTIONS.length !== 12) fail(`expected 12 mapped CAA2024 sections, found ${CAA2024_SECTIONS.length}`);
if (CAA2024_PROVISIONS.length !== 46) fail(`expected 46 verified provisions/navigation references, found ${CAA2024_PROVISIONS.length}`);
if (CAA2024_SCHEDULES.length !== 3) fail(`expected 3 schedules, found ${CAA2024_SCHEDULES.length}`);
if (CAA2024_ITEMS.length !== 8) fail(`expected 8 Schedule B items, found ${CAA2024_ITEMS.length}`);
if (CAA2024_DEFINITIONS.length !== 13) fail(`expected 13 mapped definitions, found ${CAA2024_DEFINITIONS.length}`);
if (module13Questions.length !== 40) fail(`expected 40 M13 questions, found ${module13Questions.length}`);
if (FLASHCARDS_M13.length !== 72) fail(`expected 72 M13 flashcards, found ${FLASHCARDS_M13.length}`);

const qIds = new Set();
for (const question of module13Questions) {
  if (qIds.has(question.id)) fail(`duplicate M13 question ID ${question.id}`);
  qIds.add(question.id);
  if (question.module !== 13) fail(`${question.id} is not Module 13`);
  if (question.sourceKind !== 'caa2024-contract' || !question.source.startsWith(CAA2024_SOURCE.name)) fail(`invalid CAA2024 provenance on ${question.id}`);
  if (!isValidCaa2024Ref(question.contractRef)) fail(`invalid CAA2024 reference ${question.contractRef} on ${question.id}`);
  if (question.contractPage !== caaReferencePage(question.contractRef)) fail(`page/reference mismatch on ${question.id}`);
  if (!Number.isInteger(question.contractPage) || question.contractPage < 1 || question.contractPage > 16) fail(`invalid printed contract page on ${question.id}`);
  if (!Array.isArray(question.options) || question.options.length !== 4) fail(`invalid options on ${question.id}`);
  if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) fail(`invalid keyed answer on ${question.id}`);
  if (!question.explanation?.trim()) fail(`missing explanation on ${question.id}`);
}

const answerCounts = [0, 1, 2, 3].map((position) => module13Questions.filter((q) => q.correct === position).length);
if (answerCounts.some((count) => count !== 10)) fail(`expected balanced 10/10/10/10 answer positions, found ${answerCounts.join('/')}`);

const cardIds = new Set();
for (const card of FLASHCARDS_M13) {
  if (cardIds.has(card.id)) fail(`duplicate M13 flashcard ID ${card.id}`);
  cardIds.add(card.id);
  if (card.module !== 13) fail(`${card.id} is not Module 13`);
  if (card.source !== CAA2024_SOURCE.name || card.sourceKind !== 'caa2024-contract') fail(`invalid CAA2024 provenance on ${card.id}`);
  if (!isValidCaa2024Ref(card.contractRef)) fail(`invalid CAA2024 reference ${card.contractRef} on ${card.id}`);
  if (card.contractPage !== caaReferencePage(card.contractRef)) fail(`page/reference mismatch on ${card.id}`);
  if (!Number.isInteger(card.contractPage) || card.contractPage < 1 || card.contractPage > 16) fail(`invalid printed contract page on ${card.id}`);
  if (!card.definition?.trim() || card.definition.trim().length < 70) fail(`definition too thin on ${card.id}`);
}

for (const [id, crossRef] of Object.entries(CAA2024_QUESTION_CROSS_REFS)) {
  if (!isValidCaa2024Ref(crossRef.caaContractRef)) fail(`invalid CAA2024 question cross-reference ${crossRef.caaContractRef} on ${id}`);
  if (crossRef.caaContractPage !== caaReferencePage(crossRef.caaContractRef)) fail(`CAA2024 question cross-reference page mismatch on ${id}`);
}

for (const [id, crossRef] of Object.entries(CAA2024_FLASHCARD_CROSS_REFS)) {
  if (!isValidCaa2024Ref(crossRef.caaContractRef)) fail(`invalid CAA2024 flashcard cross-reference ${crossRef.caaContractRef} on ${id}`);
  if (crossRef.caaContractPage !== caaReferencePage(crossRef.caaContractRef)) fail(`CAA2024 flashcard cross-reference page mismatch on ${id}`);
}

console.log(`CAA2024 QA passed: ${CAA2024_SECTIONS.length} sections, ${CAA2024_PROVISIONS.length} provisions/navigation refs, ${CAA2024_SCHEDULES.length} schedules, ${CAA2024_ITEMS.length} items and ${CAA2024_DEFINITIONS.length} definitions mapped.`);
console.log(`M13: 40 questions, 72 flashcards; answer distribution A=${answerCounts[0]}, B=${answerCounts[1]}, C=${answerCounts[2]}, D=${answerCounts[3]}.`);
console.log(`Existing-bank cross-references: ${Object.keys(CAA2024_QUESTION_CROSS_REFS).length} questions, ${Object.keys(CAA2024_FLASHCARD_CROSS_REFS).length} flashcards.`);
