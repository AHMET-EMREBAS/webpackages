import { Order } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchOrderDto implements SearchDto<Order> {
  @SearchProperty<Order>([])
  search: FindOptionsWhere<Order>;
}
