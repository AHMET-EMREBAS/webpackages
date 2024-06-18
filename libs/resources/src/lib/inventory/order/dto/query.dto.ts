import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Order } from '../entities';

@Exclude()
export class QueryOrderDto extends BaseQueryDto implements QueryDto<Order> {
  @QueryProperty() quantity: number;
  @Exclude() sku: unknown;
  @Exclude() cart: unknown;
}
