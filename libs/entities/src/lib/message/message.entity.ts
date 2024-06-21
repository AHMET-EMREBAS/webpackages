import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IMessage } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class Message extends BaseEntity implements IMessage {
  @Column({ type: 'string', required: false, unique: false }) message: string;
  @Column({ type: 'date', required: false, unique: false }) readDate: Date;

  @Relation({ relationType: 'owner', target: User }) user: User;
  @Relation({ relationType: 'many', target: User }) to: User[];
}
