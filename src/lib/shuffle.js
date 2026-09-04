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
  for (let i = 0; i < question.options.length; i += 1) {
    if (i === targetCorrectPosition) presentationOptions.push(correctEntry);
    else {
      presentationOptions.push(distractors[distractorIndex]);
      distractorIndex += 1;
    }
  }

  return {
    ...question,
    presentationOptions,
    presentationCorrect: targetCorrectPosition,
  };
}

/**
 * Creates a presentation-only study queue.
 *
 * Correct answer positions are balanced across A/B/C/D for the session, then
 * the distractors are shuffled independently. The stored question content and
 * stored `correct` source index are never mutated.
 */
export function prepareStudyQueue(questions) {
  const answerPositions = shuffleCopy(
    questions.map((_, index) => index % 4),
  );

  return questions.map((question, index) =>
    presentQuestion(question, answerPositions[index]),
  );
}
