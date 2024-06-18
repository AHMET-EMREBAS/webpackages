import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateDiscountDto {
  @Property({ type: 'string', minLength: 3, required: true, unique: true })
  name: string;
}
