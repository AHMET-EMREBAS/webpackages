import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Notification } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchNotificationDto implements SearchDto<Notification> {
  @SearchProperty<Notification>(['name'])
  search: FindOptionsWhere<Notification>;
}
