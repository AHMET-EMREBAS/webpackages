import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateProductDto {
  @Property({ type: 'string', required: true, minLength: 3, maxLength: 100 })
  name: string;

  @Property({ type: 'string', required: true, minLength: 8, maxLength: 13 })
  upc: string;

  @Property({ type: 'string', maxLength: 100 }) brand: string;

  @Property({ type: 'string', maxLength: 500 }) description: string;

  @Property({ type: 'number' }) supplier: number;

  @Property({ type: 'number' }) category: number;
}
