import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Department } from '../entities';

@Exclude()
export class QueryDepartmentDto
  extends BaseQueryDto
  implements QueryDto<Department>
{
  @QueryProperty() name!: string;
}
