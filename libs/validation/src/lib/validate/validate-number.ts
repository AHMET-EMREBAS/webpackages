import { IsInt, IsNumber, Max, Min, ValidatorOptions } from 'class-validator';
import { UseDecorators } from '@webpackages/utils';
import { ApiPropertyOptions } from '@webpackages/types';

/**
 *
 * @param options
 * @param validationOptions
 */
export function ValidateNumber(
  options: ApiPropertyOptions,
  validationOptions: ValidatorOptions
): PropertyDecorator {
  const decorators: PropertyDecorator[] = [];

  const { maximum, minimum, isInt } = options;

  if (minimum != undefined) decorators.push(Min(minimum, validationOptions));
  if (maximum != undefined) decorators.push(Max(maximum, validationOptions));
  if (isInt === true) {
    decorators.push(IsInt(validationOptions));
  } else {
    decorators.push(IsNumber({}, validationOptions));
  }

  return UseDecorators(decorators);
}
