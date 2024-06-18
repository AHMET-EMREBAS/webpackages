import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Event } from '../entities';

@Exclude()
export class QueryEventDto extends BaseQueryDto implements QueryDto<Event> {
  @QueryProperty() name!: string;
}
