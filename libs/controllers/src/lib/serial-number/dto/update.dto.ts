import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateSerialNumberDto {
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
}
