import { OrderView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderOrderDto extends CreateOrderDto<OrderView>([
  'unitPrice',
  'subTotal',
  'quantity',
]) {}
