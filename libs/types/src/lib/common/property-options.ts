/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropertyType, RelationType } from './property-type';
import { StringFormat } from './string-format';
import { Constructor } from './constructor';
import { InputType } from './input-type';
import { ResourceName } from '../auth';
import { EntitySelectOption } from './entity-option';

export class PropertyOptions<T = any> {
  type: PropertyType;
  label: string;
  resourceName: string;
  autocompleteOptions: EntitySelectOption[];
  tabIndex: number;
  textPrefix: string;
  textPuffix: string;
  icon: string;
  groupName: string;
  order: number;
  relationType: RelationType;
  target: Constructor;
  targetName: string;
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

  dependsOn: string;
  update: boolean;
  unique: boolean;
  hideInTable: boolean;
  hideInCreate: boolean;
  hideInUpdate: boolean;
  conditionalClass: (value: T) => string;
  class: string;
  tableColumnClass: string;
  tableColumnConditionalClass: (value: T) => string;
  from: string;

  viewColumns: string[];
  resourceLabelProperty: string;
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
