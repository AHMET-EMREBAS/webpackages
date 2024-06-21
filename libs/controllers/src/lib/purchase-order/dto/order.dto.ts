import { PurchaseOrder } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderPurchaseOrderDto extends CreateOrderDto<PurchaseOrder>([
  'price',
  'quantity',
  'subTotal',
  'total',
  'purchase',
  'sku',
]) {}
