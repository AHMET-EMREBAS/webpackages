import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateProductDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    required: true,
    unique: true,
    example: 'Product Name',
  })
  name: string;
  @Property({ type: 'string', maxLength: 1000, example: 'Product Description' })
  description: string;
  @Property({
    type: 'string',
    required: true,
    unique: true,
    format: 'barcode',
    example: '787593827182',
  })
  upc: string;

  @Property({ type: 'number' })
  category: IDDto;

  @Property({ type: 'number' })
  supplier: IDDto;
}
