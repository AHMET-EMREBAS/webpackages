import { IDDto, ObjectIdProperty, Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateDiscountDto {
  @Property({ type: 'number', required: true }) percentDiscount: number;
  @Property({ type: 'number', required: true }) fixedDiscount: number;
  @Property({ type: 'string', required: true }) currency: string;
  @ObjectIdProperty() sku: IDDto;
}
