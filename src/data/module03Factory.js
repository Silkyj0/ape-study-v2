import { module03Source } from './module03Sources.js';

export function m3Question({ id, scenarioText = null, prompt, options, correct, sourceKey, explanation }) {
  return {
    id,
    module: 3,
    scenarioText,
    prompt,
    options,
    correct,
    ...module03Source(sourceKey),
    explanation,
    difficulty: 'exam',
  };
}
