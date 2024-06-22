import { StoreView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchStoreDto implements SearchDto<StoreView> {
  @SearchProperty<Store>(['name', 'userUsername'])
  search: FindOptionsWhere<Store>;
}
