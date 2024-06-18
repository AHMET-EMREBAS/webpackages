import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Discount } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchDiscountDto implements SearchDto<Discount> {
  @SearchProperty<Discount>([
    'percentDiscount',
    'fixedDiscount',
    'currency',
    'sku',
  ])
  search: FindOptionsWhere<Discount>;
}
