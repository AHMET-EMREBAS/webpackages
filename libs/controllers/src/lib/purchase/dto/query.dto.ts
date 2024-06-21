import { Purchase } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryPurchaseDto
  extends BaseQueryDto
  implements QueryDto<Purchase>
{
  @QueryProperty() orderDate: string;
  @QueryProperty() expectedShippingDate: string;
  @QueryProperty() shippingDate: string;
  @QueryProperty() subTotal: string;
  @QueryProperty() total: string;
  @QueryProperty() notes: string;
  @QueryProperty() user: string;
}
