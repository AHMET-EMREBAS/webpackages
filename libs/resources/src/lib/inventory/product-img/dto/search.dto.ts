import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { ProductImg } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchProductImgDto implements SearchDto<ProductImg> {
  @SearchProperty<ProductImg>(['name'])
  search: FindOptionsWhere<ProductImg>;
}
