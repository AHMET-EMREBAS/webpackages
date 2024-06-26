import { CategoryView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCategoryDto implements SearchDto<CategoryView> {
  @SearchProperty<CategoryView>(['name'])
  search: FindOptionsWhere<CategoryView>;
}
