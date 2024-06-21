import {
  ArrayMaxSize,
  ArrayMinSize,
  IsNotEmpty,
  IsOptional,
  ValidationOptions,
} from 'class-validator';

import { ApiPropertyOptions } from '@webpackages/types';
import { UseDecorators } from '@webpackages/utils';

export function ValidateCommon(
  options: ApiPropertyOptions,
  validationOptions: ValidationOptions
): PropertyDecorator {
  const decorators: PropertyDecorator[] = [];

  const { required, maxItems, minItems } = options;

  if (required) {
    decorators.push(IsNotEmpty(validationOptions));
  } else {
    decorators.push(IsOptional(validationOptions));
  }

  if (maxItems != undefined) {
    decorators.push(ArrayMaxSize(maxItems));
  }

  if (minItems != undefined) {
    decorators.push(ArrayMinSize(minItems));
  }

  return UseDecorators(decorators);
}
