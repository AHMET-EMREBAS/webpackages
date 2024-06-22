import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSupplierDto {
  @Property({
    type: 'string',
    minLength: 3,
    maxLength: 100,
    required: true,
    unique: true,
    example: 'ABC Wholesale 68',
  })
  name: string;
}
