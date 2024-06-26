import { NotificationView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchNotificationDto implements SearchDto<NotificationView> {
  @SearchProperty<NotificationView>(['message'])
  search: FindOptionsWhere<NotificationView>;
}
