import { PurchaseView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderPurchaseDto extends CreateOrderDto<PurchaseView>([
  'orderDate',
  'expectedShippingDate',
  'shippingDate',
  'subTotal',
  'total',
  'notes',
  'username',
]) {}
