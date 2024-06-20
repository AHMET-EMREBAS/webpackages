import { ValidationOptions } from 'class-validator';
import { UseDecorators } from '../common';
import { CommonOptions, ValidateCommon } from './validate-common';
import { DateOptions, ValidateDate } from './validate-date';
import { NumberOptions, ValidateNumber } from './validate-number';
import { ObjectOptions, ValidateObject } from './validate-object';
import { StringOptions, ValidateString } from './validate-string';

export type _ValidateOptions = (
  | StringOptions
  | NumberOptions
  | ObjectOptions
  | DateOptions
) &
  CommonOptions;

export type ValidateOptions = _ValidateOptions;

export function Validate(options: Partial<_ValidateOptions>) {
  const decorators: PropertyDecorator[] = [];

  const { type, isArray } = options;

  const validationOptions: ValidationOptions = { each: !!isArray };

  decorators.push(...ValidateCommon(options, validationOptions));

  if (type === 'string') {
    decorators.push(...ValidateString(options, validationOptions));
  } else if (type === 'date') {
    decorators.push(...ValidateDate(options, validationOptions));
  } else if (type === 'number') {
    decorators.push(...ValidateNumber(options, validationOptions));
  } else if (type === 'object') {
    decorators.push(...ValidateObject(options, validationOptions));
  }

  return UseDecorators(decorators);
}
