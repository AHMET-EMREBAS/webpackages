import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSkuDto {
  @Property({ type: 'string', required: true, minLength: 3, maxLength: 100 })
  name: string;

  @Property({ type: 'string', maxLength: 500 })
  description: string;
  
  @Property({
    type: 'string',
    required: true,
    minLength: 8,
    maxLength: 13,
    unique: true,
  })
  sku: string;
}
