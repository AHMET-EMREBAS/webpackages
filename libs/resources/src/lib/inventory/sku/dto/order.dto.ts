import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Sku } from '../entities';

@Exclude()
export class OrderSkuDto extends CreateOrderDto<Sku>([
  'name',
  'description',
  'sku',
]) {}
