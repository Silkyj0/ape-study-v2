import { module05Part01 } from './module05.part01.js';
import { module05Part02 } from './module05.part02.js';
import { module05Part03 } from './module05.part03.js';
import { module05Part04 } from './module05.part04.js';
import { module05Part05 } from './module05.part05.js';
import { module05Part06 } from './module05.part06.js';
import { module05Part07 } from './module05.part07.js';

export const module05Questions = [
  ...module05Part01,
  ...module05Part02,
  ...module05Part03,
  ...module05Part04,
  ...module05Part05,
  ...module05Part06,
  ...module05Part07,
];

export const module05Ids = module05Questions.map((question) => question.id);
