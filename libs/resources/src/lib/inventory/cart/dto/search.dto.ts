import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Cart } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCartDto implements SearchDto<Cart> {
  @SearchProperty<Cart>(['name'])
  search: FindOptionsWhere<Cart>;
}
