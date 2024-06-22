import { CategoryView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCategoryDto
  extends BaseQueryDto
  implements QueryDto<CategoryView>
{
  @QueryProperty() name: string;
}
