import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Category } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCategoryDto implements SearchDto<Category> {
  @SearchProperty<Category>(['name'])
  search: FindOptionsWhere<Category>;
}
