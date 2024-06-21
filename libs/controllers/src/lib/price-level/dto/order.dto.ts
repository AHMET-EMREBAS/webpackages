import { PriceLevel } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderPriceLevelDto extends CreateOrderDto<PriceLevel>([
  'name',
  'taxrate',
]) {}
