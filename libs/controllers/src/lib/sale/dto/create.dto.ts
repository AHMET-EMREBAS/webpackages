import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSaleDto {
  @Property({
    type: 'number',
    required: true,
    description: 'Sale subtotal',
    example: 10.99,
  })
  subTotal: number;
  @Property({
    type: 'number',
    required: true,
    description: 'Sale total',
    example: 10.99,
  })
  total: number;
  @Property({ type: 'number', minimum: 0 }) creditCardPayment: number;
  @Property({ type: 'number', minimum: 0 }) cashPayment: number;
  @Property({ type: 'number', minimum: 0 }) balancePayment: number;
  @Property({ type: 'number', minimum: 1 }) customerId: number;
  @Property({ type: 'number', minimum: 1 }) employeeId: number;
}
