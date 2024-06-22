import { OrderView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryOrderDto extends BaseQueryDto implements QueryDto<OrderView> {
  @QueryProperty() unitPrice: string;
  @QueryProperty() subTotal: string;
  @QueryProperty() quantity: string;
  @QueryProperty() skuId: string;
  @QueryProperty() skuActive: string;
  @QueryProperty() cartId: string;
  @QueryProperty() cartActive: string;
  @QueryProperty() discountsId: string;
  @QueryProperty() discountsActive: string;
}
