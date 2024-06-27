import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUserEmail } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class UserEmail extends BaseEntity implements IUserEmail {
  @Column({ type: 'string', required: true, format: 'email' }) email: string;

  @Relation({ relationType: 'owner', target: User }) user: User;
}
