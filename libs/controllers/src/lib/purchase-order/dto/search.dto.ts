import { PurchaseOrder } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPurchaseOrderDto implements SearchDto<PurchaseOrder> {
  @SearchProperty<PurchaseOrder>([])
  search: FindOptionsWhere<PurchaseOrder>;
}
