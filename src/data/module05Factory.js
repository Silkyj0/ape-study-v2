import { module05Source } from './module05Sources.js';

export function m5Question({ id, scenarioText = null, prompt, options, correct, sourceKey, explanation }) {
  return {
    id,
    module: 5,
    scenarioText,
    prompt,
    options,
    correct,
    ...module05Source(sourceKey),
    explanation,
    difficulty: 'exam',
  };
}
