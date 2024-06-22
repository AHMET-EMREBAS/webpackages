import { PurchaseOrderView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderPurchaseOrderDto extends CreateOrderDto<PurchaseOrderView>([
  'price',
  'quantity',
  'subTotal',
  'total',
  ,
  'sku',
  'name',
]) {}
