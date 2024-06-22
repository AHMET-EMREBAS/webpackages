import { DiscountView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderDiscountDto extends CreateOrderDto<DiscountView>([
  'fixedDiscount',
  'percentDiscount',
  'startDate',
  'endDate',
  'name',
  'sku',
  'name',
  'currency',
  'taxrate',
]) {}
