import { CartView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCartDto implements SearchDto<CartView> {
  @SearchProperty<Cart>(['complete', 'customerUsername', 'userUsername'])
  search: FindOptionsWhere<Cart>;
}
