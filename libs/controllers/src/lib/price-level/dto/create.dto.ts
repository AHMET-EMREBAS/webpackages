import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreatePriceLevelDto {
  @Property({
    type: 'string',
    label: 'Price Level Name',
    minLength: 3,
    maxLength: 100,
    required: true,
    unique: true,
    example: 'Chicago Retail',
  })
  name: string;
  @Property({
    type: 'string',
    label: 'Currency',
    required: true,
    minLength: 1,
    maxLength: 10,
    example: 'USD',
  })
  currency: string;
  @Property({ type: 'number', required: true, minimum: 0, example: 10.25 })
  taxrate: number;
}
