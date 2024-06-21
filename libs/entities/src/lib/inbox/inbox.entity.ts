import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IInbox } from '@webpackages/models';

import { User } from '../user';
import { Message } from '../message';

@Entity()
export class Inbox extends BaseEntity implements IInbox {
  @Relation({ relationType: 'owner', target: User })
  user: User;

  @Relation({ relationType: 'many', target: Message })
  sent: Message[];

  @Relation({ relationType: 'many', target: Message })
  received: Message[];
}
