import { ValidationOptions } from 'class-validator';
import { UseDecorators } from '../common';
import { CommonOptions, ValidateCommon } from './validate-common';
import { DateOptions, ValidateDate } from './validate-date';
import { NumberOptions, ValidateNumber } from './validate-number';
import { ObjectOptions, ValidateObject } from './validate-object';
import { StringOptions, ValidateString } from './validate-string';
import { BooleanOptions, ValidateBoolean } from './validate-boolean';

export type _ValidateOptions = (
  | StringOptions
  | NumberOptions
  | ObjectOptions
  | DateOptions
  | BooleanOptions
) &
  CommonOptions;

export type ValidateOptions = _ValidateOptions;

export function Validate(options: Partial<_ValidateOptions>) {
  const decorators: PropertyDecorator[] = [];

  const { type, isArray } = options;

  const validationOptions: ValidationOptions = { each: !!isArray };

  decorators.push(ValidateCommon(options, validationOptions));

  if (type === 'string') {
    decorators.push(ValidateString(options, validationOptions));
  } else if (type === 'date') {
    decorators.push(ValidateDate(options, validationOptions));
  } else if (type === 'number') {
    decorators.push(ValidateNumber(options, validationOptions));
  } else if (type === 'object') {
    if (!options.target) throw new Error('Object property target is required!');

    decorators.push(ValidateObject(options.target, validationOptions));
  } else if (type === 'boolean') {
    decorators.push(ValidateBoolean(validationOptions));
  }

  return UseDecorators(decorators);
}
