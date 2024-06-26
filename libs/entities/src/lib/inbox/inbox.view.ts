import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Inbox } from './inbox.entity';
import { InboxMetadata } from '@webpackages/metadata';

import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Inbox>(ds, Inbox, InboxMetadata);
  },
})
export class InboxView extends BaseView {
  @ViewColumn() employeeId: User['id'];
  @ViewColumn() employeeActive: User['active'];
}
