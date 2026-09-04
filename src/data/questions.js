import { module01Questions } from './module01.js';
import { module02Questions } from './module02.js';
import { module03Questions } from './module03.js';
import { module04Questions } from './module04.js';
import { module05Questions } from './module05.js';
import { module06Questions } from './module06.js';
import { module07Questions } from './module07.js';
import { module08Questions } from './module08.js';
import { module09Questions } from './module09.js';
import { module10Questions } from './module10.js';
import { module11Questions } from './module11.js';
import { calibrationOverrides } from './calibrationOverrides.js';

export const SEED_VERSION = 15;

const BASE_SEED = [
  ...module01Questions,
  ...module02Questions,
  ...module03Questions,
  ...module04Questions,
  ...module05Questions,
  ...module06Questions,
  ...module07Questions,
  ...module08Questions,
  ...module09Questions,
  ...module10Questions,
  ...module11Questions,
];

export const SEED = BASE_SEED.map((question) => {
  const override = calibrationOverrides[question.id];
  return override ? { ...question, ...override } : question;
});
