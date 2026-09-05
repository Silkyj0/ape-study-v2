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
 * Question order is shuffled first. Correct answer positions are then balanced
 * across A/B/C/D for the session, and distractors are shuffled independently.
 * Stored source order and answer indexes are never mutated. Spaced repetition
 * determines which questions are eligible; this function only randomises their
 * presentation.
 */
export function prepareStudyQueue(questions) {
  const shuffledQuestions = shuffleCopy(questions);
  const answerPositions = shuffleCopy(
    shuffledQuestions.map((_, index) => index % 4),
  );

  return shuffledQuestions.map((question, index) =>
    presentQuestion(question, answerPositions[index]),
  );
}

// A missed question can be reinserted later in the same session. A fresh random
// answer position prevents the repeat from becoming a memory-of-position test.
export function prepareRepeatQuestion(question) {
  return presentQuestion(question, Math.floor(Math.random() * 4));
}
