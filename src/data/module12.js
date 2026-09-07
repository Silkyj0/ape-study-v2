import { ABIC_QUESTIONS_01 } from './abic/questions01.js';
import { ABIC_QUESTIONS_02 } from './abic/questions02.js';
import { ABIC_QUESTIONS_03 } from './abic/questions03.js';
import { ABIC_QUESTIONS_04 } from './abic/questions04.js';
import { ABIC_QUESTIONS_05 } from './abic/questions05.js';

export const module12Questions = [
  ...ABIC_QUESTIONS_01,
  ...ABIC_QUESTIONS_02,
  ...ABIC_QUESTIONS_03,
  ...ABIC_QUESTIONS_04,
  ...ABIC_QUESTIONS_05,
];

export const module12Ids = module12Questions.map((question) => question.id);
