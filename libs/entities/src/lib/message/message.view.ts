import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Message } from './message.entity';
import { MessageMetadata } from '@webpackages/metadata';

import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Message>(ds, Message, MessageMetadata);
  },
})
export class MessageView extends BaseView {
  @ViewColumn() message: string;
  @ViewColumn() readDate: Date;

  @ViewColumn() fromUserId: User['id'];
  @ViewColumn() fromUserActive: User['active'];
  @ViewColumn() toUserId: User['id'];
  @ViewColumn() toUserActive: User['active'];
}
