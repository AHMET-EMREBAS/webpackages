import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateProductDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    unique: true,
    inputType: 'text',
    class: ' order-1 w-4/12 grow',
    example: 'Product Name',
  })
  name: string;
  @Property({
    type: 'string',
    unique: true,
    format: 'barcode',
    minLength: 8,
    maxLength: 13,
    class: ' order-2 w-4/12 grow',
    example: '787593827182',
  })
  upc: string;
  @Property({
    type: 'string',
    maxLength: 1000,
    example: 'Product Description',
    class: ' order-5 w-full',
  })
  description: string;

  @Property({ type: 'number' })
  category: IDDto;

  @Property({ type: 'number' })
  supplier: IDDto;
}
