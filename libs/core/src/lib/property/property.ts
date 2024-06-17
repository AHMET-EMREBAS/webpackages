import { Type, applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Expose, Type as ObjectType } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
  ValidationOptions,
} from 'class-validator';

export type PropertyType = 'string' | 'number' | 'boolean' | 'date' | 'object';

export type UIInputType =
  | 'text'
  | 'textarea'
  | 'checkbox'
  | 'select'
  | 'select-entity'
  | 'slider'
  | 'switch'
  | 'list-select';

export type StringFormat = 'email';

export type CommonPropertyOptions = Partial<
  Pick<
    ApiPropertyOptions,
    | 'required'
    | 'isArray'
    | 'example'
    | 'default'
    | 'deprecated'
    | 'readOnly'
    | 'writeOnly'
  >
> & {
  type: PropertyType;
  inputType?: UIInputType;
  icon?: string;
  label?: string;
};

export type StringPropertyOptions = {
  type: 'string';
  minLength?: number;
  maxLength?: number;
  format?: StringFormat;
  equalTo?: string;
  startsWith?: string;
  endsWith?: string;
};

export type NumberPropertyOptions = {
  type: 'number';
  minimum?: number;
  maximum?: number;
  moreThan?: string;
  lessThan?: string;
  int?: boolean;
};

export type ObjectPropertyOptions = {
  type: 'object';
  target: Type;
};

export type BooleanPropertyOptions = {
  type: 'boolean';
};

export type DatePropertyOptions = {
  type: 'date';
};

export type PickPropertyOptions<T extends PropertyType> = T extends 'string'
  ? StringPropertyOptions
  : T extends 'number'
  ? NumberPropertyOptions
  : T extends 'object'
  ? ObjectPropertyOptions
  : T extends 'date'
  ? DatePropertyOptions
  : T extends 'boolean'
  ? BooleanPropertyOptions
  : CommonPropertyOptions;

export type PropertyOptions = (
  | PickPropertyOptions<'string'>
  | PickPropertyOptions<'number'>
  | PickPropertyOptions<'boolean'>
  | PickPropertyOptions<'object'>
  | PickPropertyOptions<'date'>
) &
  CommonPropertyOptions;

export function StringProperty(
  options: StringPropertyOptions,
  vo: ValidationOptions
): PropertyDecorator[] {
  const decorators: PropertyDecorator[] = [];

  const { minLength, maxLength, format } = options;

  decorators.push(IsString(vo));

  if (minLength != undefined) decorators.push(MinLength(minLength, vo));
  if (maxLength != undefined) decorators.push(MaxLength(maxLength, vo));
  if (format === 'email') decorators.push(IsEmail(undefined, vo));

  return decorators;
}



export function NumberProperty(
  options: NumberPropertyOptions,
  vo: ValidationOptions
): PropertyDecorator[] {
  const decorators: PropertyDecorator[] = [];
  const { int, minimum, maximum: maximumum } = options;

  decorators.push(IsNumber(undefined, vo));

  if (int == true) decorators.push(IsInt(vo));

  if (minimum != undefined) decorators.push(Min(minimum));
  if (maximumum != undefined) decorators.push(Min(maximumum));

  return decorators;
}

export function DateProperty(
  options: DatePropertyOptions,
  vo: ValidationOptions
): PropertyDecorator[] {
  const decorators: PropertyDecorator[] = [];
  decorators.push(IsDate(vo));
  return decorators;
}

export function BooleanProperty(
  options: BooleanPropertyOptions,
  vo: ValidationOptions
): PropertyDecorator[] {
  const decorators: PropertyDecorator[] = [];
  decorators.push(IsBoolean(vo));
  return decorators;
}
export function ObjectProperty(
  options: ObjectPropertyOptions,
  vo: ValidationOptions
): PropertyDecorator[] {
  const decorators: PropertyDecorator[] = [];

  decorators.push(IsObject(vo));
  decorators.push(ValidateNested(vo));
  decorators.push(ObjectType(() => options.target));

  return decorators;
}

export function Property(options: PropertyOptions) {
  const decorators: PropertyDecorator[] = [
    Expose(),
    ApiProperty({
      ...options,
      nullable: options.required === true ? false : true,
    }),
  ];

  const { type, required, isArray } = options;

  const vo: ValidationOptions = { each: !!isArray };

  if (required === true) decorators.push(IsNotEmpty(vo));
  else decorators.push(IsOptional(vo));

  if (type === 'string') {
    decorators.push(...StringProperty(options, vo));
  } else if (type === 'boolean') {
    decorators.push(...BooleanProperty(options, vo));
  } else if (type === 'date') {
    decorators.push(...DateProperty(options, vo));
  } else if (type === 'number') {
    decorators.push(...NumberProperty(options, vo));
  } else if (type === 'object') {
    decorators.push(...ObjectProperty(options, vo));
  }

  return applyDecorators(...decorators);
}