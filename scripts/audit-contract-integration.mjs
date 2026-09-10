import { ABIC_FLASHCARD_CROSS_REFS, ABIC_QUESTION_CROSS_REFS } from '../src/data/abic/crossReferences.js';
import { CAA2024_FLASHCARD_CROSS_REFS, CAA2024_QUESTION_CROSS_REFS } from '../src/data/caa2024/crossReferences.js';
import { CONTRACT_INTEGRATION_QA_OVERRIDES } from '../src/data/contractIntegrationQaOverrides.js';
import { FLASHCARDS } from '../src/data/flashcards.js';
import { SEED } from '../src/data/questions.js';
import { EXAM_QA_STATUSES } from '../src/lib/exam.js';

function fail(message) {
  console.error(`CONTRACT INTEGRATION QA FAILED: ${message}`);
  process.exit(1);
}

const questionById = new Map(SEED.map((question) => [question.id, question]));
const cardById = new Map(FLASHCARDS.map((card) => [card.id, card]));

for (const id of Object.keys(ABIC_QUESTION_CROSS_REFS)) {
  if (!questionById.has(id)) fail(`ABIC question cross-reference points to inactive/missing question ${id}`);
}
for (const id of Object.keys(CAA2024_QUESTION_CROSS_REFS)) {
  if (!questionById.has(id)) fail(`CAA2024 question cross-reference points to inactive/missing question ${id}`);
}
for (const id of Object.keys(ABIC_FLASHCARD_CROSS_REFS)) {
  if (!cardById.has(id)) fail(`ABIC flashcard cross-reference points to missing card ${id}`);
}
for (const id of Object.keys(CAA2024_FLASHCARD_CROSS_REFS)) {
  if (!cardById.has(id)) fail(`CAA2024 flashcard cross-reference points to missing card ${id}`);
}
for (const id of Object.keys(CONTRACT_INTEGRATION_QA_OVERRIDES)) {
  const question = questionById.get(id);
  if (!question) fail(`precision override points to inactive/missing question ${id}`);
  if (question.qaStatus === 'parcs-confirmed') fail(`precision override must not modify confirmed PARCS question ${id}`);
}

const m12 = SEED.filter((question) => question.module === 12);
const m13 = SEED.filter((question) => question.module === 13);
if (m12.length !== 50) fail(`expected 50 active M12 questions, found ${m12.length}`);
if (m13.length !== 40) fail(`expected 40 active M13 questions, found ${m13.length}`);
if (m12.some((question) => question.qaStatus !== 'abic-source-verified')) fail('not all M12 questions retain ABIC source-verified status');
if (m13.some((question) => question.qaStatus !== 'caa2024-source-verified')) fail('not all M13 questions retain CAA2024 source-verified status');
if (EXAM_QA_STATUSES.has('abic-source-verified') || EXAM_QA_STATUSES.has('caa2024-source-verified')) fail('supplementary contract QA statuses must remain excluded from the normal exam pool');

for (const [id, question] of questionById) {
  if (question.module <= 11 && question.caaContractRef && question.sourceKind === 'caa2024-contract') {
    fail(`core question ${id} was incorrectly reclassified as CAA2024-derived`);
  }
  if (question.module <= 11 && question.contractRef && question.sourceKind === 'abic-contract') {
    fail(`core question ${id} was incorrectly reclassified as ABIC-derived`);
  }
}

console.log(`Contract integration QA passed across ${SEED.length} active questions and ${FLASHCARDS.length} flashcards.`);
console.log(`Cross-references: ABIC ${Object.keys(ABIC_QUESTION_CROSS_REFS).length} questions / ${Object.keys(ABIC_FLASHCARD_CROSS_REFS).length} cards; CAA2024 ${Object.keys(CAA2024_QUESTION_CROSS_REFS).length} questions / ${Object.keys(CAA2024_FLASHCARD_CROSS_REFS).length} cards.`);
console.log('Supplementary M12/M13 remain excluded from the normal exam QA-status set; confirmed PARCS items remain untouched by contract precision overrides.');
