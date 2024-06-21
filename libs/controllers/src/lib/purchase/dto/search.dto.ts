import { Purchase } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPurchaseDto implements SearchDto<Purchase> {
  @SearchProperty<Purchase>([
    'orderDate',
    'expectedShippingDate',
    'shippingDate',
    'subTotal',
    'total',
    'notes',
    'user',
  ])
  search: FindOptionsWhere<Purchase>;
}
