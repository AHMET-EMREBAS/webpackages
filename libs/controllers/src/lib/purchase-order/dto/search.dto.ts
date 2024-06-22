import { PurchaseOrderView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPurchaseOrderDto implements SearchDto<PurchaseOrderView> {
  @SearchProperty<PurchaseOrder>([
    'price',
    'quantity',
    'subTotal',
    'total',
    ,
    'skuSku',
    'skuName',
  ])
  search: FindOptionsWhere<PurchaseOrder>;
}
