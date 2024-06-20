import {
  IsObject,
  ValidateNested,
  ValidationOptions,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ObjectType } from '../common';

export type ObjectOptions = { type: 'object'; target: ObjectType };

export function ValidateObject(
  options: Partial<ObjectOptions>,
  validationOptions: ValidationOptions
) {
  const decorators: PropertyDecorator[] = [];

  const { target } = options;

  if (!target) {
    throw new Error('Object property target is required!');
  }

  decorators.push(IsObject(validationOptions));
  decorators.push(ValidateNested(validationOptions));
  decorators.push(Type(() => target));

  return decorators;
}
