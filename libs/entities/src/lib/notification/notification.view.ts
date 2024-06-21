import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Notification } from './notification.entity';
import { NotificationMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Notification>(
      ds,
      Notification,
      NotificationMetadata
    );
  },
})
export class NotificationView extends BaseView {
  @ViewColumn() message: string;
}
