import { module01Questions } from './module01.js';
import { module02Questions } from './module02.js';
import { module03Questions } from './module03.js';
import { module04Questions } from './module04.js';
import { module05Questions } from './module05.js';
import { module06Questions } from './module06.js';
import { module06NovationQuestions } from './module06.novation.js';
import { module06ParcsQuestions } from './module06.parcs.js';
import { module07Questions } from './module07.js';
import { module07ParcsQuestions } from './module07.parcs.js';
import { module08Questions } from './module08.js';
import { module08ParcsQuestions } from './module08.parcs.js';
import { module09Questions } from './module09.js';
import { module09ParcsQuestions } from './module09.parcs.js';
import { module10Questions } from './module10.js';
import { module10ParcsQuestions } from './module10.parcs.js';
import { module11Questions } from './module11.js';
import { module11ParcsQuestions } from './module11.parcs.js';
import { module12Questions } from './module12.js';
import { module13Questions } from './module13.js';
import { ABIC_QUESTION_CROSS_REFS } from './abic/crossReferences.js';
import { CAA2024_QUESTION_CROSS_REFS } from './caa2024/crossReferences.js';
import { CONTRACT_INTEGRATION_QA_OVERRIDES } from './contractIntegrationQaOverrides.js';
import { calibrationOverrides, calibrationIds } from './calibrationOverrides.js';
import { examOverridesBatch02, examBatch02Ids } from './examOverridesBatch02.js';
import { examOverridesBatch03, examBatch03Ids } from './examOverridesBatch03.js';
import { laterModuleQaOverrides } from './laterModuleQaOverrides.js';
import { laterModuleDifficultyOverrides } from './laterModuleDifficultyOverrides.js';
import { getQaMetadata, PARCS_SAMPLE_IDS, WITHHELD_QA_IDS } from './qaMetadata.js';

export const SEED_VERSION = 36;

const BASE_SEED = [
  ...module01Questions,
  ...module02Questions,
  ...module03Questions,
  ...module04Questions,
  ...module05Questions,
  ...module06Questions,
  ...module06NovationQuestions,
  ...module06ParcsQuestions,
  ...module07Questions,
  ...module07ParcsQuestions,
  ...module08Questions,
  ...module08ParcsQuestions,
  ...module09Questions,
  ...module09ParcsQuestions,
  ...module10Questions,
  ...module10ParcsQuestions,
  ...module11Questions,
  ...module11ParcsQuestions,
  ...module12Questions,
  ...module13Questions,
];

export const CURATED_M1_M2_IDS = [
  ...new Set([
    ...PARCS_SAMPLE_IDS,
    ...calibrationIds,
    ...examBatch02Ids,
    ...examBatch03Ids,
  ].filter((id) => !WITHHELD_QA_IDS.has(id))),
];

const CURATED_M1_M2_SET = new Set(CURATED_M1_M2_IDS);
const ACTIVE_BASE_SEED = BASE_SEED.filter((question) => question.module > 2 || CURATED_M1_M2_SET.has(question.id));

function qaFor(question) {
  if (question.module === 12 && question.sourceKind === 'abic-contract') {
    return {
      qaStatus: 'abic-source-verified',
      qaLabel: 'ABIC contract verified',
      qaNote: `Built directly from ABIC SW 2018 and checked against ${question.contractRef}${question.contractPage ? ` on contract page ${question.contractPage}` : ''}. Module 12 is supplementary and is excluded from the main M1–M11 exam simulation.`,
    };
  }

  if (question.module === 13 && question.sourceKind === 'caa2024-contract') {
    return {
      qaStatus: 'caa2024-source-verified',
      qaLabel: 'CAA2024 contract verified',
      qaNote: `Built directly from the supplied CAA2024 full-services agreement and checked against ${question.contractRef}${question.contractPage ? ` on contract page ${question.contractPage}` : ''}. Module 13 is supplementary and is excluded from the main M1–M11 exam simulation.`,
    };
  }

  const qa = getQaMetadata(question);
  const notes = [qa.qaNote].filter(Boolean);

  if (question.contractRef && question.contractSource) {
    notes.push(`Cross-checked against ABIC SW 2018 ${question.contractRef}${question.contractPage ? ` (p.${question.contractPage})` : ''}; the original Acumen/PARCS source remains primary.`);
  }

  if (question.caaContractRef && question.caaContractSource) {
    notes.push(`Cross-checked against CAA2024 ${question.caaContractRef}${question.caaContractPage ? ` (p.${question.caaContractPage})` : ''}; the original Acumen/PARCS source remains primary.`);
  }

  return { ...qa, qaNote: notes.join(' ') };
}

export const SEED = ACTIVE_BASE_SEED.map((question) => {
  const existingOverride = laterModuleDifficultyOverrides[question.id]
    || laterModuleQaOverrides[question.id]
    || examOverridesBatch03[question.id]
    || examOverridesBatch02[question.id]
    || calibrationOverrides[question.id];
  const revised = existingOverride ? { ...question, ...existingOverride } : question;
  const precisionOverride = CONTRACT_INTEGRATION_QA_OVERRIDES[question.id];
  const precisionRefined = precisionOverride ? { ...revised, ...precisionOverride } : revised;
  const withAbicCrossRef = ABIC_QUESTION_CROSS_REFS[question.id]
    ? { ...precisionRefined, ...ABIC_QUESTION_CROSS_REFS[question.id] }
    : precisionRefined;
  const withContractCrossRefs = CAA2024_QUESTION_CROSS_REFS[question.id]
    ? { ...withAbicCrossRef, ...CAA2024_QUESTION_CROSS_REFS[question.id] }
    : withAbicCrossRef;
  return { ...withContractCrossRefs, ...qaFor(withContractCrossRefs) };
});
