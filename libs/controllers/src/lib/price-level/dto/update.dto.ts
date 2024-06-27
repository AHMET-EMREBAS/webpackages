import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdatePriceLevelDto {
  @Property({
    type: 'string',
    label: 'Price Level Name',
    minLength: 3,
    maxLength: 100,
    unique: true,
    example: 'Chicago Retail',
  })
  name: string;
  @Property({
    type: 'string',
    label: 'Currency',
    minLength: 1,
    maxLength: 10,
    example: 'USD',
  })
  currency: string;
  @Property({ type: 'number', minimum: 0, example: 10.25 }) taxrate: number;
}
