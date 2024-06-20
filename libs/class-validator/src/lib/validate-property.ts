import {
  MinLength,
  MaxLength,
  IsEmail,
  IsStrongPassword,
  NotContains,
  IsAlphanumeric,
  ValidationOptions as VO,
  IsCreditCard,
  IsEAN,
  IsInt,
  Min,
  IsPhoneNumber,
  IsUUID,
  IsIP,
  IsIn,
  IsNotIn,
  Contains,
  ValidationOptions,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { IsSSN } from './is-ssn';
import {
  EndsWith,
  NotEndsWith,
  NotStartsWith,
  StartsWith,
} from './start-end-width';

function use(...decorators: PropertyDecorator[]): PropertyDecorator {
  return function (target, propertyKey) {
    decorators?.forEach((decorator) => {
      decorator(target, propertyKey);
    });
  };
}

export type CommonOptions<T = unknown> = {
  required?: boolean;
  isArray?: boolean;
  default?: T;
};

export type SF =
  | 'id'
  | 'name'
  | 'email'
  | 'password'
  | 'barcode'
  | 'phone'
  | 'short'
  | 'long'
  | 'uuid'
  | 'ean'
  | 'credit-card'
  | 'ssn'
  | 'ip4'
  | 'ip6';

export type StringOptions = {
  minLength: number;
  maxLength: number;
  format: SF;
  enum: string[];
  forbidden: string[];
  startsWith: string;
  notStartsWith: string;
  notEndsWith: string;
  endsWith: string;
  contains: string;
  notContains: string;
};

export type NumberOptions = {
  minimum: number;
  maximum: number;
  moreThan: string;
  lessThan: string;
};

export function ValidateFormat(sf: SF, vo: VO): PropertyDecorator[] {
  if (sf === 'email') {
    return [IsEmail(undefined, vo)];
  } else if (sf === 'barcode') {
    return [
      MinLength(8, vo),
      MaxLength(13, vo),
      NotContains(' ', vo),
      IsAlphanumeric('en-US', vo),
    ];
  } else if (sf === 'credit-card') {
    return [IsCreditCard(vo)];
  } else if (sf === 'ean') {
    return [IsEAN(vo)];
  } else if (sf === 'id') {
    return [Min(1, vo), IsInt(vo)];
  } else if (sf === 'long') {
    return [MaxLength(1000, vo)];
  } else if (sf === 'short') {
    return [MaxLength(100, vo)];
  } else if (sf === 'name') {
    return [MinLength(3, vo), MaxLength(100, vo)];
  } else if (sf === 'password') {
    return [IsStrongPassword(undefined, vo)];
  } else if (sf === 'phone') {
    return [IsPhoneNumber(undefined, vo)];
  } else if (sf === 'ssn') {
    return [IsSSN(vo)];
  } else if (sf === 'uuid') {
    return [IsUUID('4', vo)];
  } else if (sf === 'ip4') {
    return [IsIP('4', vo)];
  } else if (sf === 'ip6') {
    return [IsIP('6')];
  }

  return [];
}

export function ValidatCommon(options: CommonOptions) {
  const decorators: PropertyDecorator[] = [];

  const { required, isArray } = options;

  const vo: ValidationOptions = { each: !!isArray };

  if (required) {
    decorators.push(IsNotEmpty(vo));
  } else {
    decorators.push(IsOptional(vo));
  }

  return decorators;
}

export function ValdiateString(
  options: Partial<StringOptions>,
  vo: VO
): PropertyDecorator {
  const decorators: PropertyDecorator[] = [];

  const {
    minLength,
    maxLength,
    notContains,
    format,
    enum: enums,
    forbidden,
    startsWith,
    endsWith,
    contains,
    notEndsWith,
    notStartsWith,
  } = options;

  if (minLength != undefined) {
    decorators.push(MinLength(minLength, vo));
  }
  if (maxLength != undefined) {
    decorators.push(MaxLength(maxLength, vo));
  }

  if (contains != undefined) {
    decorators.push(Contains(contains, vo));
  }

  if (notContains != undefined) {
    decorators.push(NotContains(notContains, vo));
  }

  if (format != undefined) {
    decorators.push(...ValidateFormat(format, vo));
  }

  if (enums != undefined) {
    decorators.push(IsIn(enums, vo));
  }

  if (forbidden != undefined) {
    decorators.push(IsNotIn(forbidden, vo));
  }

  if (startsWith != undefined) {
    decorators.push(StartsWith(startsWith, vo));
  }

  if (notStartsWith) {
    decorators.push(NotStartsWith(notStartsWith));
  }

  if (endsWith != undefined) {
    decorators.push(EndsWith(endsWith, vo));
  }

  if (notEndsWith) {
    decorators.push(NotEndsWith(notEndsWith));
  }

  return use(...decorators);
}

export function ValidateNumber() {}

export function ValidateDate() {}

export function ValidateObject() {}

export function ValidateBoolean() {}

export function ValidateInteger() {}

export function Validate() {}
