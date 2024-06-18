import { IDDto, ObjectIdProperty, Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreatePriceDto {
  @Property({ type: 'number', required: true, minimum: 0, moreThan: 'cost' })
  price: number;

  @Property({ type: 'number', required: true, minimum: 0 })
  cost: number;

  @Property({ type: 'string', required: true, minLength: 1, maxLength: 10 })
  currency: string;

  @ObjectIdProperty() sku: IDDto;

  @ObjectIdProperty() priceLevel: IDDto;
}
