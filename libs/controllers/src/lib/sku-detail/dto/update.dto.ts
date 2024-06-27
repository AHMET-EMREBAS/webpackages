import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateSkuDetailDto {
  @Property({
    inputType: 'text',
    type: 'string',
    maxLength: 100,
    class: 'order-1 w-3/12 grow',
    example: 'white',
  })
  color: string;
  @Property({
    inputType: 'text',
    type: 'string',
    maxLength: 100,
    class: 'order-1 w-3/12 grow',
    example: '60in',
  })
  height: string;
  @Property({
    inputType: 'text',
    type: 'string',
    maxLength: 100,
    class: 'order-1 w-3/12 grow',
    example: '20in',
  })
  width: string;
  @Property({
    inputType: 'text',
    type: 'string',
    maxLength: 100,
    class: 'order-1 w-3/12 grow',
    example: '40lb',
  })
  weight: string;
  @Property({
    inputType: 'text',
    type: 'string',
    format: 'url',
    class: 'order-1 w-3/12 grow',
    example: 'https://youtube.com',
  })
  manual: string;
  @Property({
    inputType: 'text',
    type: 'string',
    maxLength: 100,
    class: 'order-1 w-3/12 grow',
    example: 'apple',
  })
  make: string;
  @Property({
    type: 'string',
    maxLength: 100,
    inputType: 'text',
    class: 'order-1 w-2/12 grow',
    example: '2024',
  })
  model: string;
  @Property({
    type: 'string',
    maxLength: 1000,
    example: 'Add some notes about the product',
    inputType: 'textarea',
    class: 'w-full order-2 grow',
  })
  notes: string;
  @Property({
    type: 'string',
    inputType: 'text',
    maxLength: 100,
    format: 'url',
    class: 'order-3 grow',
    example: 'https://youtube.com',
  })
  website: string;
  @Property({
    type: 'string',
    maxLength: 100,
    class: 'order-4 grow',
    example: 'GH Hub Fast Production',
  })
  manufacturer: string;
  @Property({
    type: 'string',
    maxLength: 100,
    inputType: 'text',
    class: 'w-3/12 grow order-3',
    example: 'The product highlights, hot features',
  })
  highlight: string;
}
