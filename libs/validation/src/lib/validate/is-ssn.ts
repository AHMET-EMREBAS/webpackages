// ssn.validator.ts

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

@ValidatorConstraint({ name: 'ssn', async: false })
export class SSNValidator implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    // SSN validation logic
    const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
    return ssnRegex.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    // Error message if validation fails
    return `${args.property} must be a valid SSN (format: XXX-XX-XXXX)`;
  }
}

export function IsSSN(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return function (target, properyKey) {
    registerDecorator({
      name: 'isSSN',
      target: target.constructor,
      propertyName: properyKey.toString(),
      options: validationOptions,
      validator: SSNValidator,
    });
  };
}
