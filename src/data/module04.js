import { module04Part01 } from './module04.part01.js';
import { module04Part02 } from './module04.part02.js';
import { module04Part03 } from './module04.part03.js';
import { module04Part04 } from './module04.part04.js';
import { module04Part05 } from './module04.part05.js';
import { module04Part06 } from './module04.part06.js';
import { module04Part07 } from './module04.part07.js';
import { module04ParcsQuestions } from './module04.parcs.js';

export const module04Questions = [
  ...module04Part01,
  ...module04Part02,
  ...module04Part03,
  ...module04Part04,
  ...module04Part05,
  ...module04Part06,
  ...module04Part07,
  ...module04ParcsQuestions,
];

export const module04Ids = module04Questions.map((question) => question.id);
