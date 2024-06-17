import { ValidatorFunction } from './validator-function';
import { isNotEmpty, maxLength, minLength, notContains } from 'class-validator';

type StringValidationOptions = {
  minLength: number;
  maxLength: number;
  notEmpty: boolean;
  noSpace: boolean;
};

export function createStringValidator(
  options: Partial<StringValidationOptions>
): ValidatorFunction<string> {
  const validators: ValidatorFunction<string>[] = [];

  if (options.maxLength != undefined)
    validators.push((value) => maxLength(value, options.maxLength!));
  if (options.minLength != undefined)
    validators.push((value) => minLength(value, options.minLength!));
  if (options.noSpace != undefined)
    validators.push((value) => notContains(' ', value));
  if (options.notEmpty != undefined)
    validators.push((value) => isNotEmpty(value));

  return (value: string) =>
    validators.map((e) => e(value)).every((e) => e === true);
}
