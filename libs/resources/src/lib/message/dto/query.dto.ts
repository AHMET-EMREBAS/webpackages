import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Message } from '../entities';

@Exclude()
export class QueryMessageDto extends BaseQueryDto implements QueryDto<Message> {
  @QueryProperty() name!: string;
}
