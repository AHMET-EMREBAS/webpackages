/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType } from 'zlib';
import { PropertyType, RelationType } from './property-type';
import { StringFormat } from './string-format';
import { Constructor } from './constructor';

export class PropertyOptions {
  type: PropertyType;
  groupName: string;
  order: number;
  relationType: RelationType;
  target: Constructor;
  format: StringFormat;
  name: string;
  enum: Readonly<any[]>;
  forbidden: string[];
  startsWith: string;
  notStartsWith: string;
  notEndsWith: string;
  endsWith: string;
  contains: string;
  notContains: string;
  required: boolean;
  readOnly: boolean;
  writeOnly: boolean;
  example: any;
  examples: any[] | Record<string, any>;
  deprecated: boolean;
  description: string;
  default: any;
  title: string;
  maximum: number;
  exclusiveMaximum: boolean;
  minimum: number;
  exclusiveMinimum: boolean;
  maxLength: number;
  minLength: number;
  pattern: string;
  maxItems: number;
  minItems: number;
  uniqueItems: boolean;
  maxProperties: number;
  minProperties: number;
  before: Date;
  after: Date;
  weekDays: boolean;
  weekends: boolean;
  isInt?: boolean;
  moreThan: string;
  lessThan: string;
  moreThanOrEqual: string;
  lessThanOrEqual: string;

  noValidate: boolean;
  isArray: boolean;
  inputType: InputType;
  icon: string;
  dependsOn: string;
  update: boolean;
  unique: boolean;
  hideInTable: boolean;
  hideInCreate: boolean;
  hideInUpdate: boolean;
  className: (value: any) => string;

  from: string;
}

export class RelationOptions
  implements Pick<PropertyOptions, 'relationType' | 'target'>
{
  relationType: RelationType;
  target: Constructor<any>;
}

export class ColumnOptions
  implements
    Pick<
      PropertyOptions,
      | 'type'
      | 'required'
      | 'unique'
      | 'update'
      | 'target'
      | 'example'
      | 'default'
    >
{
  target: Constructor<any>;
  type: PropertyType;
  required: boolean;
  example: any;
  default: any;
  update: boolean;
  unique: boolean;
}

export type ApiPropertyOptions = Partial<PropertyOptions> & {
  type: PropertyOptions['type'];
};

export type ValidationOptions = ApiPropertyOptions;
