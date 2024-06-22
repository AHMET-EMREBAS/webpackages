import { OrderView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchOrderDto implements SearchDto<OrderView> {
  @SearchProperty<Order>(['unitPrice', 'subTotal', 'quantity', , ,])
  search: FindOptionsWhere<Order>;
}
