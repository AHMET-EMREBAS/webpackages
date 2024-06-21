import { Notification } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchNotificationDto implements SearchDto<Notification> {
  @SearchProperty<Notification>(['message'])
  search: FindOptionsWhere<Notification>;
}