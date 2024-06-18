import { IDDto, ObjectIdProperty, Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateOrderDto {
  @Property({ type: 'number', required: true }) price: number;
  @Property({ type: 'number', required: true, minimum: 1 }) quantity: number;
  @ObjectIdProperty() sku: IDDto;
}
