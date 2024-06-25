import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSkuDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    required: true,
    unique: true,
    inputType: 'text',
    description: 'Unique product sku name',
    example: 'Unique SKU Namem - SK-1 Product name',
  })
  name: string;
  @Property({
    type: 'string',
    maxLength: 1000,
    inputType: 'textarea',
    description: 'Sku description',
    example: 'Sku Description',
  })
  description: string;
  @Property({
    type: 'string',
    required: true,
    description: 'Unique sku code',
    format: 'barcode',
    inputType: 'text',
    minLength: 6,
    maxLength: 13,
  })
  sku: string;

  @Property({ type: 'number', required: true })
  product: IDDto;
}
