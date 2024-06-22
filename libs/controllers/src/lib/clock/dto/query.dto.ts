import { ClockView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryClockDto extends BaseQueryDto implements QueryDto<ClockView> {
  @QueryProperty() starDate: string;
  @QueryProperty() endDate: string;
  @QueryProperty() username: string;
}
