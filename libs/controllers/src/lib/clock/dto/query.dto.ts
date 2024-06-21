import { Clock } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryClockDto extends BaseQueryDto implements QueryDto<Clock> {
  @QueryProperty() starDate: string;
  @QueryProperty() endDate: string;
  @QueryProperty() user: string;
}
