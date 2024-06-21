import { Department } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryDepartmentDto
  extends BaseQueryDto
  implements QueryDto<Department>
{
  @QueryProperty() name: string;
}
