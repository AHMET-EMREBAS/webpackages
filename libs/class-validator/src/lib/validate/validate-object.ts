import { IsObject, ValidateNested, ValidationOptions } from 'class-validator';
import { ObjectType, UseDecorators } from '../common';

export type ObjectOptions = { type: 'object'; target: ObjectType };

/**
 * Apply Type(()=>Target) by yourself
 * @param target
 * @param validationOptions
 * @returns
 */
export function ValidateObject(
  target: ObjectType,
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
