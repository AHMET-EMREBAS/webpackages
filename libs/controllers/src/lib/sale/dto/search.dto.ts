import { SaleView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSaleDto implements SearchDto<SaleView> {
  @SearchProperty<SaleView>([
    'subTotal',
    'total',
    'creditCardPayment',
    'cashPayment',
    'balancePayment',
    'customerId',
    'userId',
  ])
  search: FindOptionsWhere<SaleView>;
}
