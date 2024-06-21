import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IAccessToken } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class AccessToken extends BaseEntity implements IAccessToken {
  @Column({ type: 'string', required: true, unique: false })
  name: string;

  @Column({ type: 'string', required: true, unique: false })
  token: string;

  @Relation({ relationType: 'owner', target: User })
  user: User;
}
