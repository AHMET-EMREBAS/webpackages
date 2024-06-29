import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSerialNumberDto {
  @Property({
    type: 'string',
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 100,
    example: '1236846182674312',
    description: 'Unique product serial number to track product',
    class: 'order-2 w-full',
    tabIndex: 2,
    update: false,
  })
  serialNumber: string;
  @Property({
    type: 'boolean',
    label: 'Enforce Serial Number',
    default: false,
    example: false,
    description: 'Is serial number required for the product?',
    class: 'order-3 w-full',
    tabIndex: 3,
    update: false,
  })
  required: boolean;
  @Property({
    type: 'string',
    label: 'Serial Number Type',
    enum: ['incremental', 'actual'],
    inputType: 'select',
    required: true,
    default: 'incremental',
    tabIndex: 4,
    class: 'order-4 w-full',
    update: false,
  })
  type: string;
  @Property({
    type: 'string',
    label: 'Serial Number Prefix',
    inputType: 'text',
    class: 'order-6, w-4/12 grow',
    tabIndex: 5,
  })
  prefix: string;
  @Property({
    type: 'string',
    label: 'Serial Number Suffix',
    inputType: 'text',
    class: 'order-6, w-4/12 grow',
    tabIndex: 6,
  })
  suffix: string;

  @Property({ type: 'object', target: IDDto, required: true })
  sku: IDDto;
}
