import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Session } from '../entities';

@Exclude()
export class QuerySessionDto extends BaseQueryDto implements QueryDto<Session> {
  @QueryProperty() deviceId!: string;
}
