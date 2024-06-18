import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Category } from '../entities';

@Exclude()
export class QueryCategoryDto
  extends BaseQueryDto
  implements QueryDto<Category>
{
  @QueryProperty() name!: string;
}
