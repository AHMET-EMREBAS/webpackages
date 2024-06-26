import { Constructor } from '@webpackages/types';
import { UseDecorators } from '@webpackages/utils';
import { IsObject, ValidateNested, ValidationOptions } from 'class-validator';

/**
 * Apply Type(()=>Target) by yourself
 * @param target
 * @param validationOptions
 * @returns
 */
export function ValidateObject(
  target: Constructor,
  validationOptions: ValidationOptions
): PropertyDecorator {
  const decorators: PropertyDecorator[] = [];
  decorators.push(IsObject(validationOptions));
  decorators.push(ValidateNested(validationOptions));

  return UseDecorators(decorators);
}
