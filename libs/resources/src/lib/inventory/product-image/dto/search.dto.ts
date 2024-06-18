import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { ProductImage } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchProductImageDto implements SearchDto<ProductImage> {
  @SearchProperty<ProductImage>(['name'])
  search: FindOptionsWhere<ProductImage>;
}
