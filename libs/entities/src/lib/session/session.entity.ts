import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISession } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class Session extends BaseEntity implements ISession {
  @Relation({ relationType: 'owner', target: User })
  user: User;
}
