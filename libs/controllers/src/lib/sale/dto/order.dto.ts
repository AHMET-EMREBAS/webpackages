import { SaleView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSaleDto extends CreateOrderDto<SaleView>([
  'subTotal',
  'total',
  'creditCardPayment',
  'cashPayment',
  'balancePayment',
  'customerId',
  'userId',
]) {}
