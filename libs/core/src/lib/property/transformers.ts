import { Transform } from 'class-transformer';
import { isArray } from 'class-validator';

export type TransformOptions = {
  isArray?: boolean;
};

export function transformNumber(value: string | number) {
  return typeof value === 'string' ? parseFloat(value) : value;
}

export function transformInt(value: string | number) {
  return typeof value === 'string' ? parseInt(value) : value;
}

export function transformDate(value: string | Date) {
  if (typeof value === 'string') {
    const d = new Date(value);

    if (d.toString()) {
      return d;
    }
  }
  return value;
}

export function transformBoolean(value: string | boolean) {
  return typeof value === 'string'
    ? value === 'true'
      ? true
      : value === 'false'
      ? false
      : value
    : value;
}

export function NumberTransformer(options: TransformOptions) {
  return Transform(({ value }) => {
    if (options.isArray === true) {
      if (isArray(value)) {
        return value.map(transformNumber);
      }
    }
    return transformNumber(value);
  });
}

export function IntTransformer(options: TransformOptions) {
  return Transform(({ value }) => {
    if (options.isArray === true) {
      if (isArray(value)) {
        return value.map(transformInt);
      }
    }
    return transformInt(value);
  });
}

export function DateTransformer(options: TransformOptions) {
  return Transform(({ value }) => {
    if (options.isArray === true) {
      if (isArray(value)) {
        return value.map(transformDate);
      }
    }
    return transformDate(value);
  });
}

export function BooleanTransformer(options: TransformOptions) {
  return Transform(({ value }) => {
    if (options.isArray === true) {
      if (isArray(value)) {
        return value.map(transformBoolean);
      }
    }
    return transformBoolean(value);
  });
}
