import { IsBoolean, ValidatorOptions } from 'class-validator';
import { UseDecorators } from '@webpackages/utils';

export type BooleanOptions = {
  type: 'boolean';
};

/**
 * @param validationOptions
 */
export function ValidateBoolean(validationOptions: ValidatorOptions) {
  const decorators: PropertyDecorator[] = [];
  decorators.push(IsBoolean(validationOptions));
  return UseDecorators(decorators);
}
