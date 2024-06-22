import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IInbox } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class Inbox extends BaseEntity implements IInbox {
  @Relation({ relationType: 'owner', target: User }) user: User;
}
