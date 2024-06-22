import { PurchaseView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPurchaseDto implements SearchDto<PurchaseView> {
  @SearchProperty<PurchaseView>([
    'orderDate',
    'expectedShippingDate',
    'shippingDate',
    'subTotal',
    'total',
    'notes',
    'userUsername',
  ])
  search: FindOptionsWhere<PurchaseView>;
}
