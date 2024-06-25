import { DiscountView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderDiscountDto extends CreateOrderDto<DiscountView>([
  'name',
  'fixedDiscount',
  'percentDiscount',
  'startDate',
  'endDate',
  'skuName',
  'skuSku',
  'priceLevelName',
  'priceLevelCurrency',
  'priceLevelTaxrate',
]) {}
