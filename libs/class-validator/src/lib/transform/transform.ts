import { Transform } from 'class-transformer';
import {
  isBooleanString,
  isDateString,
  isNumberString,
  isStrongPassword,
} from 'class-validator';
import { isStringObject } from 'util/types';

export function PrepareString() {
  return Transform(({ value }) =>
    typeof value === 'string'
      ? value
          .trim()
          .split(' ')
          .filter((e) => e)
          .join(' ')
      : value
  );
}

export function PrepareNumber() {
  return Transform(({ value }) =>
    typeof value === 'string'
      ? isNumberString(value)
        ? parseFloat(value)
        : value
      : value
  );
}
export function PrepareInteger() {
  return Transform(({ value }) =>
    typeof value === 'string'
      ? isNumberString(value)
        ? parseInt(value)
        : value
      : value
  );
}
export function PrepareDate() {
  return Transform(({ value }) =>
    typeof value === 'string'
      ? isDateString(value)
        ? new Date(value)
        : value
      : value
  );
}

export function PrepareBoolean() {
  return Transform(({ value }) =>
    typeof value === 'string'
      ? isBooleanString(value)
        ? value == 'true'
          ? true
          : value === 'false'
          ? false
          : value
        : value
      : value
  );
}

export function PrepareObject() {
  return Transform(({ value }) =>
    typeof value === 'string'
      ? isStringObject(value)
        ? JSON.parse(value)
        : value
      : value
  );
}
