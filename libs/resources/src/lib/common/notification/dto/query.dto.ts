import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Notification } from '../entities';

@Exclude()
export class QueryNotificationDto
  extends BaseQueryDto
  implements QueryDto<Notification>
{
  @QueryProperty() name!: string;
}
