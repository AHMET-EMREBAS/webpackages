import { Transform } from 'class-transformer';
import { isBooleanString, isNumberString } from 'class-validator';

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
      ? new Date(value).toString() != 'Invalid Date'
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
    typeof value === 'string' ? JSON.parse(value) : value
  );
}
