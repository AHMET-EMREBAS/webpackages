import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUserAddress } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class UserAddress extends BaseEntity implements IUserAddress {
  @Column({ type: 'string', required: false, unique: false }) street: string;
  @Column({ type: 'string', required: false, unique: false }) city: string;
  @Column({ type: 'string', required: false, unique: false }) state: string;
  @Column({ type: 'string', required: false, unique: false }) zip: string;

  @Relation({ relationType: 'owner', target: User }) user: User;
}