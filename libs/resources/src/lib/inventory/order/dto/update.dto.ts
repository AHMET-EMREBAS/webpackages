import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/core';

@Exclude()
export class UpdateOrderDto {
  @Property({ type: 'number', minimum: 0 }) price: number;
  @Property({ type: 'number', minimum: 1 }) quantity: number;
}
