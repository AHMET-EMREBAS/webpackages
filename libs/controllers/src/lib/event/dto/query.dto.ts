import { Event } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryEventDto extends BaseQueryDto implements QueryDto<Event> {
  @QueryProperty() name: string;
  @QueryProperty() payload: string;
}
