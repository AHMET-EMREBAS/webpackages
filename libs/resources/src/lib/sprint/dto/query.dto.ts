import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Sprint } from '../entities';

@Exclude()
export class QuerySprintDto extends BaseQueryDto implements QueryDto<Sprint> {
  @QueryProperty() name!: string;
}
