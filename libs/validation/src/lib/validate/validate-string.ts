import {
  MinLength,
  MaxLength,
  IsEmail,
  IsStrongPassword,
  NotContains,
  IsAlphanumeric,
  ValidationOptions,
  IsCreditCard,
  IsEAN,
  IsPhoneNumber,
  IsUUID,
  IsIP,
  IsIn,
  IsNotIn,
  Contains,
  IsString,
  IsDataURI,
  IsUrl,
} from 'class-validator';
import { IsSSN } from './is-ssn';
import {
  EndsWith,
  NotEndsWith,
  NotStartsWith,
  StartsWith,
} from './custom-string-validators';

import { ApiPropertyOptions, StringFormat } from '@webpackages/types';
import { UseDecorators } from '@webpackages/utils';

export function ValidateFormat(
  stringFormat: StringFormat,
  validationOptions: ValidationOptions
): PropertyDecorator[] {
  const sf = stringFormat;

  if (sf === 'email') {
    return [IsEmail(undefined, validationOptions)];
  } else if (sf === 'barcode') {
    return [
      MinLength(8, validationOptions),
      MaxLength(13, validationOptions),
      NotContains(' ', validationOptions),
    ];
  } else if (sf === 'credit-card') {
    return [IsCreditCard(validationOptions)];
  } else if (sf === 'ean') {
    return [IsEAN(validationOptions)];
  } else if (sf === 'long') {
    return [MaxLength(1000, validationOptions)];
  } else if (sf === 'short') {
    return [MaxLength(100, validationOptions)];
  } else if (sf === 'name') {
    return [
      MinLength(3, validationOptions),
      MaxLength(100, validationOptions),
      IsAlphanumeric(undefined, validationOptions),
    ];
  } else if (sf === 'password') {
    return [IsStrongPassword(undefined, validationOptions)];
  } else if (sf === 'phone') {
    return [IsPhoneNumber(undefined, validationOptions)];
  } else if (sf === 'ssn') {
    return [IsSSN(validationOptions)];
  } else if (sf === 'uuid') {
    return [IsUUID('4', validationOptions)];
  } else if (sf === 'ip4') {
    return [IsIP('4', validationOptions)];
  } else if (sf === 'ip6') {
    return [IsIP('6')];
  } else if (sf === 'data-uri') {
    return [IsDataURI(validationOptions)];
  } else if (sf === 'url') {
    return [IsUrl(undefined, validationOptions)];
  }

  return [];
}

/**
 *
 * @param options
 * @param validationOptions
 * @returns
 */
export function ValidateString(
  options: ApiPropertyOptions,
  validationOptions: ValidationOptions
): PropertyDecorator {
  const vo = validationOptions;
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

  decorators.push(IsString(vo));

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

  return UseDecorators(decorators);
}
