import { module01Questions } from './module01.js';
import { module02Questions } from './module02.js';
import { module03Questions } from './module03.js';
import { module04Questions } from './module04.js';
import { module05Questions } from './module05.js';
import { module06Questions } from './module06.js';
import { module06NovationQuestions } from './module06.novation.js';
import { module06ParcsQuestions } from './module06.parcs.js';
import { module07Questions } from './module07.js';
import { module08Questions } from './module08.js';
import { module09Questions } from './module09.js';
import { module10Questions } from './module10.js';
import { module11Questions } from './module11.js';
import { calibrationOverrides, calibrationIds } from './calibrationOverrides.js';
import { examOverridesBatch02, examBatch02Ids } from './examOverridesBatch02.js';
import { examOverridesBatch03, examBatch03Ids } from './examOverridesBatch03.js';
import { laterModuleQaOverrides } from './laterModuleQaOverrides.js';
import { getQaMetadata, PARCS_SAMPLE_IDS, WITHHELD_QA_IDS } from './qaMetadata.js';

export const SEED_VERSION = 26;

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
  ...module08Questions,
  ...module09Questions,
  ...module10Questions,
  ...module11Questions,
];

// The original module files remain the archive/source bank. The live M1/M2 bank
// is deliberately smaller: immutable PARCS samples plus questions that have
// passed the exam-standard rewrite workflow. Known source-check items are held
// back from study rather than guessed or silently corrected.
export const CURATED_M1_M2_IDS = [
  ...new Set([
    ...PARCS_SAMPLE_IDS,
    ...calibrationIds,
    ...examBatch02Ids,
    ...examBatch03Ids,
  ].filter((id) => !WITHHELD_QA_IDS.has(id))),
];

const CURATED_M1_M2_SET = new Set(CURATED_M1_M2_IDS);

const ACTIVE_BASE_SEED = BASE_SEED.filter((question) =>
  question.module > 2 || CURATED_M1_M2_SET.has(question.id),
);

export const SEED = ACTIVE_BASE_SEED.map((question) => {
  const override = laterModuleQaOverrides[question.id]
    || examOverridesBatch03[question.id]
    || examOverridesBatch02[question.id]
    || calibrationOverrides[question.id];
  const revised = override ? { ...question, ...override } : question;
  return { ...revised, ...getQaMetadata(revised) };
});
