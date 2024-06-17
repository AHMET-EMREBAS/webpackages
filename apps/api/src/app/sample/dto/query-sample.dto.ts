import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Sample } from '../entities';

@Exclude()
export class QuerySampleDto extends BaseQueryDto implements QueryDto<Sample> {
  @QueryProperty() dob!: Date;
  @QueryProperty() name!: string;
}
