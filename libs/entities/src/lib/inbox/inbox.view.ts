import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Inbox } from './inbox.entity';
import { InboxMetadata } from '@webpackages/metadata';

import { User } from '../user';
import { Message } from '../message';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Inbox>(ds, Inbox, InboxMetadata);
  },
})
export class InboxView extends BaseView {
  @ViewColumn() userId: User['id'];
  @ViewColumn() userActive: User['active'];
  @ViewColumn() messageId: Message['id'];
  @ViewColumn() messageActive: Message['active'];
}
