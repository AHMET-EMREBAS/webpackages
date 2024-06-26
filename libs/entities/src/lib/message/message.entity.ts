import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IMessage } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class Message extends BaseEntity implements IMessage {
  @Column({ type: 'string' }) message: string;
  @Column({ type: 'date' }) readDate: Date;

  @Relation({ relationType: 'owner', target: User }) user: User;
  @Relation({ relationType: 'one', target: User }) to: User;
}
