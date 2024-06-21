import { Order } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryOrderDto extends BaseQueryDto implements QueryDto<Order> {
  @QueryProperty() unitPrice: string;
  @QueryProperty() subTotal: string;
  @QueryProperty() quantity: string;
  @QueryProperty() sku: string;
  @QueryProperty() cart: string;
  @QueryProperty() discounts: string;
}
