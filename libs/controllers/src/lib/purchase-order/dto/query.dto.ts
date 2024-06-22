import { PurchaseOrderView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryPurchaseOrderDto
  extends BaseQueryDto
  implements QueryDto<PurchaseOrderView>
{
  @QueryProperty() price: string;
  @QueryProperty() quantity: string;
  @QueryProperty() subTotal: string;
  @QueryProperty() total: string;
  @QueryProperty() purchaseId: string;
  @QueryProperty() purchaseActive: string;
  @QueryProperty() skuId: string;
  @QueryProperty() skuActive: string;
  @QueryProperty() skuSku: string;
  @QueryProperty() skuName: string;
}
