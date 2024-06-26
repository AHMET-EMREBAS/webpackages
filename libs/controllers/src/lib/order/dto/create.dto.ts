import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateOrderDto {
  @Property({ type: 'number', required: true, minimum: 0 }) unitPrice: number;
  @Property({ type: 'number', required: true, minimum: 0 }) subTotal: number;
  @Property({ type: 'number', minimum: 1 }) quantity: number;

  @Property({ type: 'object', target: IDDto, required: true })
  sku: IDDto;

  @Property({ type: 'object', target: IDDto, required: true })
  cart: IDDto;

  @Property({ type: 'object', target: IDDto })
  discount: IDDto;
}
