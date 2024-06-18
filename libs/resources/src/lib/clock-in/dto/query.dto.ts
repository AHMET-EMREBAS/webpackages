import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { ClockIn } from '../entities';

@Exclude()
export class QueryClockInDto extends BaseQueryDto implements QueryDto<ClockIn> {
  @QueryProperty() name!: string;
}
