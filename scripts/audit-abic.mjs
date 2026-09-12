import { ABIC_CLAUSES, ABIC_DEFINITIONS, ABIC_SCHEDULES, ABIC_SOURCE, isValidAbicRef } from '../src/data/abic/contractMap.js';
import { ABIC_FLASHCARD_CROSS_REFS, ABIC_QUESTION_CROSS_REFS } from '../src/data/abic/crossReferences.js';
import { module12Questions } from '../src/data/module12.js';
import { FLASHCARDS_M12 } from '../src/data/flashcards/module12.js';

function fail(message) {
  console.error(`ABIC QA FAILED: ${message}`);
  process.exit(1);
}

if (ABIC_CLAUSES.length !== 142) fail(`expected 142 mapped clauses including S1, found ${ABIC_CLAUSES.length}`);
if (ABIC_SCHEDULES.length !== 8) fail(`expected 8 schedules, found ${ABIC_SCHEDULES.length}`);
if (ABIC_DEFINITIONS.length !== 37) fail(`expected 37 definitions, found ${ABIC_DEFINITIONS.length}`);
if (module12Questions.length !== 50) fail(`expected 50 M12 questions, found ${module12Questions.length}`);
if (FLASHCARDS_M12.length !== 77) fail(`expected 77 M12 flashcards, found ${FLASHCARDS_M12.length}`);

const qIds = new Set();
for (const question of module12Questions) {
  if (qIds.has(question.id)) fail(`duplicate M12 question ID ${question.id}`);
  qIds.add(question.id);
  if (question.module !== 12) fail(`${question.id} is not Module 12`);
  if (question.sourceKind !== 'abic-contract' || !question.source.startsWith(ABIC_SOURCE.name)) fail(`invalid ABIC provenance on ${question.id}`);
  if (!isValidAbicRef(question.contractRef)) fail(`invalid ABIC reference ${question.contractRef} on ${question.id}`);
  if (!Number.isInteger(question.contractPage) || question.contractPage < 1 || question.contractPage > 56) fail(`invalid contract page on ${question.id}`);
  if (!Array.isArray(question.options) || question.options.length !== 4) fail(`invalid options on ${question.id}`);
  if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) fail(`invalid keyed answer on ${question.id}`);
  if (!question.explanation?.trim()) fail(`missing explanation on ${question.id}`);
}

const answerCounts = [0, 1, 2, 3].map((position) => module12Questions.filter((q) => q.correct === position).length);
if (Math.max(...answerCounts) - Math.min(...answerCounts) > 1) fail(`unbalanced source answer positions: ${answerCounts.join('/')}`);

const cardIds = new Set();
for (const card of FLASHCARDS_M12) {
  if (cardIds.has(card.id)) fail(`duplicate M12 flashcard ID ${card.id}`);
  cardIds.add(card.id);
  if (card.module !== 12) fail(`${card.id} is not Module 12`);
  if (card.source !== ABIC_SOURCE.name || card.sourceKind !== 'abic-contract') fail(`invalid ABIC provenance on ${card.id}`);
  if (card.contractRef && !isValidAbicRef(card.contractRef)) fail(`invalid ABIC reference ${card.contractRef} on ${card.id}`);
  if (!Number.isInteger(card.contractPage) || card.contractPage < 1 || card.contractPage > 56) fail(`invalid contract page on ${card.id}`);
}

if (FLASHCARDS_M12.filter((card) => card.difficulty === 'advanced').length !== 5) fail('expected 5 advanced ABIC flashcards');

for (const [id, crossRef] of Object.entries({ ...ABIC_QUESTION_CROSS_REFS, ...ABIC_FLASHCARD_CROSS_REFS })) {
  if (!isValidAbicRef(crossRef.contractRef)) fail(`invalid cross-reference ${crossRef.contractRef} on ${id}`);
  if (!Number.isInteger(crossRef.contractPage) || crossRef.contractPage < 1 || crossRef.contractPage > 56) fail(`invalid cross-reference page on ${id}`);
}

console.log(`ABIC QA passed: ${ABIC_CLAUSES.length} clauses, ${ABIC_SCHEDULES.length} schedules, ${ABIC_DEFINITIONS.length} definitions mapped; 50 questions and 77 flashcards verified.`);
console.log(`M12 answer-position distribution: A=${answerCounts[0]}, B=${answerCounts[1]}, C=${answerCounts[2]}, D=${answerCounts[3]}.`);
console.log(`Existing-bank cross-references: ${Object.keys(ABIC_QUESTION_CROSS_REFS).length} questions, ${Object.keys(ABIC_FLASHCARD_CROSS_REFS).length} flashcards.`);
