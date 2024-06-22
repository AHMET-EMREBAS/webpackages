import { OrderView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryOrderDto extends BaseQueryDto implements QueryDto<OrderView> {
  @QueryProperty() unitPrice: string;
  @QueryProperty() subTotal: string;
  @QueryProperty() quantity: string;
}
