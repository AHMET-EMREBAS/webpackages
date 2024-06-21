// ssn.validator.ts

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

@ValidatorConstraint({ name: 'startsWith', async: false })
export class StartsWithValidator implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    const [inputValue] = args.constraints;
    return value.startsWith(inputValue);
  }

  defaultMessage(args: ValidationArguments) {
    const [prefix] = args.constraints;
    return `${args.property} must start with "${prefix}"`;
  }
}

export function StartsWith(
  inputValue: string,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return function (target, propertyKey) {
    registerDecorator({
      name: 'startsWith',
      target: target.constructor,
      propertyName: propertyKey.toString(),
      constraints: [inputValue],
      options: validationOptions,
      validator: StartsWithValidator,
    });
  };
}

@ValidatorConstraint({ name: 'notStartWith', async: false })
export class NotStartsWithValidator implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    const [inputValue] = args.constraints;
    return !value.startsWith(inputValue);
  }

  defaultMessage(args: ValidationArguments) {
    const [inputValue] = args.constraints;
    return `${args.property} must not start with "${inputValue}"`;
  }
}

export function NotStartsWith(
  inputValue: string,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return function (target, propertyKey) {
    registerDecorator({
      name: 'notStartWith',
      target: target.constructor,
      propertyName: propertyKey.toString(),
      constraints: [inputValue],
      options: validationOptions,
      validator: NotStartsWithValidator,
    });
  };
}

@ValidatorConstraint({ name: 'endsWith', async: false })
export class EndsWithValidator implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    const [inputValue] = args.constraints;
    return value.endsWith(inputValue);
  }

  defaultMessage(args: ValidationArguments) {
    const [inputValue] = args.constraints;
    return `${args.property} must start with "${inputValue}"`;
  }
}

export function EndsWith(
  inputValue: string,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return function (target, propertyKey) {
    registerDecorator({
      name: 'endsWith',
      target: target.constructor,
      propertyName: propertyKey.toString(),
      constraints: [inputValue],
      options: validationOptions,
      validator: EndsWithValidator,
    });
  };
}

@ValidatorConstraint({ name: 'notEndsWith', async: false })
export class NotEndsWithValidator implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    const [inputValue] = args.constraints;
    return !value.endsWith(inputValue);
  }

  defaultMessage(args: ValidationArguments) {
    const [inputValue] = args.constraints;
    return `${args.property} must start with "${inputValue}"`;
  }
}

export function NotEndsWith(
  inputValue: string,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return function (target, propertyKey) {
    registerDecorator({
      name: 'notEndsWith',
      target: target.constructor,
      propertyName: propertyKey.toString(),
      constraints: [inputValue],
      options: validationOptions,
      validator: NotEndsWithValidator,
    });
  };
}
