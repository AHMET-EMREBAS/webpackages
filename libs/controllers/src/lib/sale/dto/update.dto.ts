import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateSaleDto {
  @Property({ type: 'number', description: 'Sale subtotal', example: 10.99 })
  subTotal: number;
  @Property({ type: 'number', description: 'Sale total', example: 10.99 })
  total: number;
  @Property({ type: 'number', minimum: 0 }) creditCardPayment: number;
  @Property({ type: 'number', minimum: 0 }) cashPayment: number;
  @Property({ type: 'number', minimum: 0 }) balancePayment: number;
}
