import { DiscountView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchDiscountDto implements SearchDto<DiscountView> {
  @SearchProperty<Discount>([
    'fixedDiscount',
    'percentDiscount',
    'startDate',
    'endDate',
    'name',
    'sku',
    'name',
    'currency',
    'taxrate',
  ])
  search: FindOptionsWhere<Discount>;
}
