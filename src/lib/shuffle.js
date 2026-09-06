export function shuffleCopy(items, random = Math.random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function presentQuestion(question, targetCorrectPosition) {
  if (question.correct === null || question.correct === undefined) return question;

  if (question.fixedOptionOrder) {
    return {
      ...question,
      presentationOptions: question.options.map((text, sourceIndex) => ({ text, sourceIndex })),
      presentationCorrect: question.correct,
    };
  }

  const optionCount = question.options.length;
  const safeTargetPosition = Math.max(0, Math.min(targetCorrectPosition, optionCount - 1));
  const correctEntry = {
    text: question.options[question.correct],
    sourceIndex: question.correct,
  };

  const distractors = shuffleCopy(
    question.options
      .map((text, sourceIndex) => ({ text, sourceIndex }))
      .filter((entry) => entry.sourceIndex !== question.correct),
  );

  const presentationOptions = [];
  let distractorIndex = 0;
  for (let i = 0; i < optionCount; i += 1) {
    if (i === safeTargetPosition) presentationOptions.push(correctEntry);
    else {
      presentationOptions.push(distractors[distractorIndex]);
      distractorIndex += 1;
    }
  }

  return {
    ...question,
    presentationOptions,
    presentationCorrect: safeTargetPosition,
  };
}

function makeBalancedPositions(count, optionCount) {
  return shuffleCopy(Array.from({ length: count }, (_, index) => index % optionCount));
}

/**
 * Creates a presentation-only study queue.
 *
 * Question order is shuffled first. Correct answer positions are then balanced
 * within each answer format (four-option MCQ, two-option true/false, etc.), and
 * distractors are shuffled independently unless a question explicitly preserves
 * its option order. Stored source order and answer indexes are never mutated.
 */
export function prepareStudyQueue(questions) {
  const shuffledQuestions = shuffleCopy(questions);
  const countsByOptionCount = shuffledQuestions.reduce((counts, question) => {
    const optionCount = Math.max(question.options?.length || 0, 1);
    counts.set(optionCount, (counts.get(optionCount) || 0) + 1);
    return counts;
  }, new Map());

  const positionsByOptionCount = new Map(
    [...countsByOptionCount.entries()].map(([optionCount, count]) => [
      optionCount,
      makeBalancedPositions(count, optionCount),
    ]),
  );

  const offsets = new Map();
  return shuffledQuestions.map((question) => {
    if (question.fixedOptionOrder) return presentQuestion(question, question.correct);

    const optionCount = Math.max(question.options?.length || 0, 1);
    const offset = offsets.get(optionCount) || 0;
    const targetPosition = positionsByOptionCount.get(optionCount)[offset];
    offsets.set(optionCount, offset + 1);
    return presentQuestion(question, targetPosition);
  });
}

// A missed question can be reinserted later in the same session. A fresh random
// answer position prevents an ordinary MCQ repeat from becoming a memory-of-position
// test. Fixed-order formats such as true/false preserve their original order.
export function prepareRepeatQuestion(question) {
  if (question.fixedOptionOrder) return presentQuestion(question, question.correct);
  const optionCount = Math.max(question.options?.length || 0, 1);
  return presentQuestion(question, Math.floor(Math.random() * optionCount));
}
