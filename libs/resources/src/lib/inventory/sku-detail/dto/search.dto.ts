import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { SkuDetail } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchSkuDetailDto implements SearchDto<SkuDetail> {
  @SearchProperty<SkuDetail>(['name'])
  search: FindOptionsWhere<SkuDetail>;
}
