import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Order } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchOrderDto implements SearchDto<Order> {
  @SearchProperty<Order>(['name'])
  search: FindOptionsWhere<Order>;
}
