import { Cart } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCartDto implements SearchDto<Cart> {
  @SearchProperty<Cart>([])
  search: FindOptionsWhere<Cart>;
}
