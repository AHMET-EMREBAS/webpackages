import {
  IsInt,
  IsNumber,
  Max,
  Min,
  ValidationError,
  ValidatorOptions,
} from 'class-validator';
import { UseDecorators } from '@webpackages/utils';
import { ApiPropertyOptions } from '@webpackages/types';
import { Transform } from 'class-transformer';

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
      Transform(({ obj, value, key }) => {
        const targetValue = obj[moreThan];
        if (targetValue && value) {
          if (value > targetValue) {
            return value;
          }
          const error = new ValidationError();

          error.property = key;
          error.target = obj;
          error.constraints = {};
          error.constraints[
            'moreThan'
          ] = `${key} should be more than ${moreThan}`;
        }
      })
    );
  }

  if (lessThan != undefined) {
    decorators.push(
      Transform(({ obj, value, key }) => {
        const targetValue = obj[lessThan];
        if (targetValue && value) {
          if (value > targetValue) {
            return value;
          }
          const error = new ValidationError();

          error.property = key;
          error.target = obj;
          error.constraints = {};
          error.constraints[
            'lessThan'
          ] = `${key} should be less than ${lessThan}`;
        }
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
