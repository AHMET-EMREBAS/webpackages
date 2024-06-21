import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUserPhone } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class UserPhone extends BaseEntity implements IUserPhone {
  @Column({ type: 'string', required: true, unique: false }) phone: string;

  @Relation({ relationType: 'owner', target: User }) user: User;
}
