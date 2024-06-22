import { NotificationView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryNotificationDto
  extends BaseQueryDto
  implements QueryDto<NotificationView>
{
  @QueryProperty() message: string;
}
