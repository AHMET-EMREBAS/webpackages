import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Inbox } from '../entities';

@Exclude()
export class QueryInboxDto extends BaseQueryDto implements QueryDto<Inbox> {
  @QueryProperty() name!: string;
}
