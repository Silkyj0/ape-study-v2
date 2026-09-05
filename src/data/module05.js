import { module05Part01 } from './module05.part01.js';
import { module05Part02 } from './module05.part02.js';
import { module05Part03 } from './module05.part03.js';
import { module05Part04 } from './module05.part04.js';
import { module05Part05 } from './module05.part05.js';
import { module05Part06 } from './module05.part06.js';
import { module05Part07 } from './module05.part07.js';

// Keep the larger draft bank archived in the source files, but expose only the
// compact source-backed set requested for live study. PARC-directed external
// website questions (Country, current rating tools, passive-design websites,
// etc.) are intentionally excluded from the live Module 5 bank.
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
  // Equity / access: four distinct high-value DDA principles.
  'm5-dda-01', 'm5-dda-02', 'm5-dda-03', 'm5-dda-04',

  // WHS / safe design: lifecycle, hierarchy, concurrent duties, information
  // transfer, reasonably practicable and client/designer coordination.
  'm5-whs-08', 'm5-safe-01',
  'm5-safe-02', 'm5-safe-05',
  'm5-whs-03', 'm5-whs-06',
  'm5-whs-04', 'm5-safe-04',

  // Environment: operational vs embodied impacts and whole-life energy/carbon.
  'm5-carbon-01', 'm5-carbon-02', 'm5-carbon-03', 'm5-carbon-04',
  'm5-carbon-05', 'm5-carbon-06', 'm5-carbon-07', 'm5-carbon-08',
];

const MODULE05_CURATED_SET = new Set(MODULE05_CURATED_IDS);

export const module05Questions = MODULE05_ARCHIVE.filter((question) =>
  MODULE05_CURATED_SET.has(question.id),
);

export const module05Ids = module05Questions.map((question) => question.id);
