import { Category } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCategoryDto implements SearchDto<Category> {
  @SearchProperty<Category>([])
  search: FindOptionsWhere<Category>;
}
