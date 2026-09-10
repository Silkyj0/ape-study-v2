import { CAA2024_QUESTIONS } from './caa2024/questions.js';
import { CAA2024_QUESTION_QA_OVERRIDES } from './caa2024/questionQaOverrides.js';
import { CAA2024_SOURCE, caaReferencePage } from './caa2024/contractMap.js';

function applyCaaQaOverride(question) {
  const override = CAA2024_QUESTION_QA_OVERRIDES[question.id];
  if (!override) return question;
  const revised = { ...question, ...override };
  const contractPage = caaReferencePage(revised.contractRef);
  return {
    ...revised,
    contractPage,
    source: `${CAA2024_SOURCE.name} · ${revised.contractRef}${contractPage ? ` · p.${contractPage}` : ''}`,
  };
}

export const module13Questions = CAA2024_QUESTIONS.map(applyCaaQaOverride);
export const module13Ids = module13Questions.map((question) => question.id);
