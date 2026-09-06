import { module05Part01 } from './module05.part01.js';
import { module05Part02 } from './module05.part02.js';
import { module05Part03 } from './module05.part03.js';
import { module05Part04 } from './module05.part04.js';
import { module05Part05 } from './module05.part05.js';
import { module05Part06 } from './module05.part06.js';
import { module05Part07 } from './module05.part07.js';
import { module05ParcsQuestions } from './module05.parcs.js';

// Keep the larger draft bank archived in the source files, but expose only a
// deliberately compact source-backed authored set. Module 5 references many
// external websites that the user does not want expanded into study questions.
// After PARCS calibration the authored set is reduced further to avoid overlap
// with the 13 official sample questions and to keep M5 the smallest module.
const MODULE05_ARCHIVE = [
  ...module05Part01,
  ...module05Part02,
  ...module05Part03,
  ...module05Part04,
  ...module05Part05,
  ...module05Part06,
  ...module05Part07,
];

export const MODULE05_CURATED_IDS = [
  // Equity / access: retain four distinct high-value DDA principles.
  'm5-dda-01', 'm5-dda-02', 'm5-dda-03', 'm5-dda-04',

  // WHS / safe design: early integration, client information, concurrent duties
  // and the reasonably-practicable test.
  'm5-safe-01', 'm5-whs-08', 'm5-whs-04', 'm5-whs-06',

  // Environment: retain two non-duplicative life-cycle analysis questions; the
  // PARCS samples now provide substantial additional embodied-carbon coverage.
  'm5-carbon-03', 'm5-carbon-04',
];

const MODULE05_CURATED_SET = new Set(MODULE05_CURATED_IDS);
const module05AuthoredQuestions = MODULE05_ARCHIVE.filter((question) =>
  MODULE05_CURATED_SET.has(question.id),
);

export const module05Questions = [
  ...module05AuthoredQuestions,
  ...module05ParcsQuestions,
];

export const module05Ids = module05Questions.map((question) => question.id);
