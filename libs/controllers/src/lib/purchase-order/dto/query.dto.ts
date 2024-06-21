import { PurchaseOrder } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryPurchaseOrderDto
  extends BaseQueryDto
  implements QueryDto<PurchaseOrder>
{
  @QueryProperty() price: string;
  @QueryProperty() quantity: string;
  @QueryProperty() subTotal: string;
  @QueryProperty() total: string;
  @QueryProperty() purchase: string;
  @QueryProperty() sku: string;
}
