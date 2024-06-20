import {
  ArrayMaxSize,
  ArrayMinSize,
  IsNotEmpty,
  IsOptional,
  ValidationOptions,
} from 'class-validator';
import { PropertyType, UseDecorators } from '../common';

export type CommonOptions = {
  type: PropertyType;
  required: boolean;
  isArray: boolean;
  maxItems: number;
  minItems: number;
};

export function ValidateCommon(
  options: Partial<CommonOptions>,
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
