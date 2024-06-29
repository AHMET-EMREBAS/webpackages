import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSerialNumberDto {
  @Property({
    type: 'boolean',
    label: 'Enforce Serial Number',
    inputType: 'checkbox',
    description: 'Is serial number required for the product?',
    class: 'w-full grow',
    tabIndex: 1,
  })
  required: boolean;
  @Property({
    type: 'string',
    label: 'Serial Number Type',
    enum: ['none', 'incremental', 'actual'],
    inputType: 'select',
    required: true,
    default: 'incremental',
    class: 'order-1 w-full',
    tabIndex: 2,
  })
  type: string;
  @Property({
    type: 'string',
    label: 'Prefix',
    inputType: 'text',
    class: 'order-3, w-full grow',
    tabIndex: 3,
  })
  prefix: string;
  @Property({
    type: 'string',
    dependsOn: 'required',
    unique: true,
    update: false,
    minLength: 3,
    maxLength: 100,
    example: '1236846182674312',
    description: 'Unique product serial number to track product',
    class: 'order-5 w-full',
    tabIndex: 5,
  })
  serialNumber: string;

  @Property({ type: 'object', target: IDDto, required: true })
  product: IDDto;
}
