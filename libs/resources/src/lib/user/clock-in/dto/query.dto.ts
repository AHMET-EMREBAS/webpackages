import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { ClockIn } from '../entities';

@Exclude()
export class QueryClockInDto extends BaseQueryDto implements QueryDto<ClockIn> {
  @QueryProperty() endDate: string;
  @QueryProperty() startDate: string;
  @QueryProperty() done: string;
  @QueryProperty() userId: unknown;
}
