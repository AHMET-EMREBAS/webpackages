import { Sku } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSkuDto extends CreateOrderDto<Sku>([
  'name',
  'description',
  'sku',
  'product',
]) {}
