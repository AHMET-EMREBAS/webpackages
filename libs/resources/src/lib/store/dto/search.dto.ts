import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Store } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchStoreDto implements SearchDto<Store> {
  @SearchProperty<Store>(['name'])
  search: FindOptionsWhere<Store>;
}
