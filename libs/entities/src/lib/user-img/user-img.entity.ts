import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUserImg } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class UserImg extends BaseEntity implements IUserImg {
  @Column({ type: 'string' }) title: string;
  @Column({ type: 'string' }) generatedName: string;

  @Relation({ relationType: 'owner', target: User }) user: User;
}
