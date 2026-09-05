import { module04Source } from './module04Sources.js';

export function m4Question({ id, scenarioText = null, prompt, options, correct, sourceKey, explanation }) {
  return {
    id,
    module: 4,
    scenarioText,
    prompt,
    options,
    correct,
    ...module04Source(sourceKey),
    explanation,
    difficulty: 'exam',
  };
}
