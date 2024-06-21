import { Store } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchStoreDto implements SearchDto<Store> {
  @SearchProperty<Store>(['name'])
  search: FindOptionsWhere<Store>;
}
