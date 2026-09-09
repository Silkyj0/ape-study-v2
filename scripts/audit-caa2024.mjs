import { CAA2024_FLASHCARD_CROSS_REFS } from '../src/data/caa2024/crossReferences.js';
import { CAA2024_FLASHCARDS } from '../src/data/caa2024/flashcards.js';
import { CAA2024_QUESTIONS } from '../src/data/caa2024/questions.js';
import { CAA2024_SOURCE, isValidCaa2024Ref } from '../src/data/caa2024/contractMap.js';

function fail(message) {
  console.error(`CAA2024 QA FAILED: ${message}`);
  process.exit(1);
}

if (CAA2024_QUESTIONS.length !== 40) fail(`expected 40 M13 questions, found ${CAA2024_QUESTIONS.length}`);
if (CAA2024_FLASHCARDS.length !== 54) fail(`expected 54 M13 flashcards, found ${CAA2024_FLASHCARDS.length}`);

const qIds = new Set();
for (const question of CAA2024_QUESTIONS) {
  if (qIds.has(question.id)) fail(`duplicate M13 question ID ${question.id}`);
  qIds.add(question.id);
  if (question.module !== 13) fail(`${question.id} is not Module 13`);
  if (question.sourceKind !== 'caa2024-contract' || !question.source.startsWith(CAA2024_SOURCE.name)) fail(`invalid CAA2024 provenance on ${question.id}`);
  if (!isValidCaa2024Ref(question.contractRef)) fail(`invalid CAA2024 reference ${question.contractRef} on ${question.id}`);
  if (!Array.isArray(question.options) || question.options.length !== 4) fail(`invalid options on ${question.id}`);
  if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) fail(`invalid keyed answer on ${question.id}`);
  if (!question.explanation?.trim()) fail(`missing explanation on ${question.id}`);
}

const answerCounts = [0, 1, 2, 3].map((position) => CAA2024_QUESTIONS.filter((q) => q.correct === position).length);
if (answerCounts.some((count) => count !== 10)) fail(`expected balanced 10/10/10/10 answer positions, found ${answerCounts.join('/')}`);

const cardIds = new Set();
for (const card of CAA2024_FLASHCARDS) {
  if (cardIds.has(card.id)) fail(`duplicate M13 flashcard ID ${card.id}`);
  cardIds.add(card.id);
  if (card.module !== 13) fail(`${card.id} is not Module 13`);
  if (card.source !== CAA2024_SOURCE.name || card.sourceKind !== 'caa2024-contract') fail(`invalid CAA2024 provenance on ${card.id}`);
  if (!isValidCaa2024Ref(card.contractRef)) fail(`invalid CAA2024 reference ${card.contractRef} on ${card.id}`);
  if (!card.definition?.trim() || card.definition.trim().length < 70) fail(`definition too thin on ${card.id}`);
}

for (const [id, crossRef] of Object.entries(CAA2024_FLASHCARD_CROSS_REFS)) {
  if (!isValidCaa2024Ref(crossRef.caaContractRef)) fail(`invalid CAA2024 cross-reference ${crossRef.caaContractRef} on ${id}`);
}

console.log(`CAA2024 QA passed: 40 questions, 54 flashcards and ${Object.keys(CAA2024_FLASHCARD_CROSS_REFS).length} existing-card cross-references verified.`);
console.log(`M13 answer-position distribution: A=${answerCounts[0]}, B=${answerCounts[1]}, C=${answerCounts[2]}, D=${answerCounts[3]}.`);
