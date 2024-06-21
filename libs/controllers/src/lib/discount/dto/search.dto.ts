import { Discount } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchDiscountDto implements SearchDto<Discount> {
  @SearchProperty<Discount>([
    'fixedDiscount',
    'percentDiscount',
    'startDate',
    'endDate',
    'sku',
  ])
  search: FindOptionsWhere<Discount>;
}
