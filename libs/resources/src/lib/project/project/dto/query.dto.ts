import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Project } from '../entities';

@Exclude()
export class QueryProjectDto extends BaseQueryDto implements QueryDto<Project> {
  @QueryProperty() name!: string;
}
