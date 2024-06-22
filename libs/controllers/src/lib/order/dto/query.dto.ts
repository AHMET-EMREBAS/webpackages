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
  @QueryProperty() skuSku: string;
  @QueryProperty() skuName: string;
  @QueryProperty() cartId: string;
  @QueryProperty() cartActive: string;
  @QueryProperty() discountId: string;
  @QueryProperty() discountActive: string;
  @QueryProperty() discountFixedDiscount: string;
  @QueryProperty() discountPercentDiscount: string;
}
