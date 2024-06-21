import { Constructor } from '@webpackages/types';
import { UseDecorators } from '@webpackages/utils';
import { IsObject, ValidateNested, ValidationOptions } from 'class-validator';

export type ObjectOptions = { type: 'object'; target: Constructor };

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

  if (!target) {
    throw new Error('Object property target is required!');
  }

  decorators.push(IsObject(validationOptions));
  decorators.push(ValidateNested(validationOptions));

  return UseDecorators(decorators);
}
