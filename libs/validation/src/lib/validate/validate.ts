import { ValidationOptions } from 'class-validator';
import { ValidateCommon } from './validate-common';
import { ValidateDate } from './validate-date';
import { ValidateNumber } from './validate-number';
import { ValidateObject } from './validate-object';
import { ValidateString } from './validate-string';
import { ValidateBoolean } from './validate-boolean';
import { UseDecorators } from '@webpackages/utils';
import { ApiPropertyOptions } from '@webpackages/types';
import {
  PrepareBoolean,
  PrepareDate,
  PrepareNumber,
  PrepareObject,
  PrepareString,
} from '../transform';

export function Validate(options: ApiPropertyOptions) {
  const decorators: PropertyDecorator[] = [];

  const { type, isArray, noValidate } = options;

  const validationOptions: ValidationOptions = { each: !!isArray };

  if (noValidate == true) {
    return UseDecorators(decorators);
  }

  decorators.push(ValidateCommon(options, validationOptions));

  if (options.type === 'string') {
    decorators.push(ValidateString(options, validationOptions));
    decorators.push(PrepareString());
  } else if (type === 'date') {
    decorators.push(ValidateDate(options, validationOptions));
    decorators.push(PrepareDate());
  } else if (type === 'number') {
    decorators.push(ValidateNumber(options, validationOptions));
    decorators.push(PrepareNumber());
  } else if (type === 'object') {
    decorators.push(ValidateObject(options.target!, validationOptions));
    decorators.push(PrepareObject());
  } else if (type === 'boolean') {
    decorators.push(ValidateBoolean(validationOptions));
    decorators.push(PrepareBoolean());
  }

  return UseDecorators(decorators);
}
