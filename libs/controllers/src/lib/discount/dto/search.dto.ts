import { DiscountView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchDiscountDto implements SearchDto<DiscountView> {
  @SearchProperty<DiscountView>([
    'fixedDiscount',
    'percentDiscount',
    'startDate',
    'endDate',
    'skuName',
    'skuSku',
    'priceLevelName',
    'priceLevelCurrency',
    'priceLevelTaxrate',
  ])
  search: FindOptionsWhere<DiscountView>;
}
