import { Project } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryProjectDto extends BaseQueryDto implements QueryDto<Project> {
  @QueryProperty() name: string;
}
