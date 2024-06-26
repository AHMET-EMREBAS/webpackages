import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateSkuDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
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
    unique: true,
    description: 'Unique sku code',
    format: 'barcode',
    inputType: 'text',
    minLength: 6,
    maxLength: 13,
  })
  sku: string;
}
