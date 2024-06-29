import {
  IsInt,
  IsNumber,
  Max,
  Min,
  ValidationError,
  ValidatorOptions,
  NotContains,
  IsNotIn,
  Contains,
} from 'class-validator';
import { UseDecorators } from '@webpackages/utils';
import { ApiPropertyOptions } from '@webpackages/types';
import { Transform } from 'class-transformer';

const UN = 192785685182451;
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

  const { moreThan, lessThan, maximum, minimum, isInt } = options;

  if (minimum != undefined) decorators.push(Min(minimum, validationOptions));
  if (maximum != undefined) decorators.push(Max(maximum, validationOptions));

  if (moreThan != undefined) {
    decorators.push(
      IsNotIn([UN], {
        message: `$property should be more than ${options.moreThan}!`,
      }),
      Transform(({ obj, value }) => {
        value = parseFloat(value + '');

        const targetValue = parseFloat(obj[moreThan] + '');

        if (isNaN(targetValue) || isNaN(value)) return undefined;

        if (value > targetValue) return value;

        return UN;
      })
    );
  }

  if (lessThan != undefined) {
    decorators.push(
      IsNotIn([UN], {
        message: `$property should be less than ${options.moreThan}!`,
      }),
      Transform(({ obj, value, key }) => {
        value = parseFloat(value + '');

        const targetValue = parseFloat(obj[lessThan] + '');

        if (isNaN(targetValue) || isNaN(value)) return undefined;

        if (value > targetValue) return value;

        return UN;
      })
    );
  }

  // Type
  if (isInt === true) {
    decorators.push(IsInt(validationOptions));
  } else {
    decorators.push(IsNumber({}, validationOptions));
  }

  return UseDecorators(decorators);
}
