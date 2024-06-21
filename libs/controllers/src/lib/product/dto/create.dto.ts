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
  })
  name: string;

  @Property({ type: 'string', maxLength: 1000 })
  description: string;

  @Property({ type: 'string', required: true, unique: true, format: 'barcode' })
  upc: string;

  @Property({ type: 'number' })
  category: IDDto;

  @Property({ type: 'number' })
  supplier: IDDto;
}
