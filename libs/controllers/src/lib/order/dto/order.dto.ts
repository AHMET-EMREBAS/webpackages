import { Order } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderOrderDto extends CreateOrderDto<Order>([
  'unitPrice',
  'subTotal',
  'quantity',
  'sku',
  'cart',
  'discounts',
]) {}
