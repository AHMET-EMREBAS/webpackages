import { Entity, Relation } from '@webpackages/core';
import { Address } from '../../../common';
import { User } from '../../user';

@Entity()
export class UserAddress extends Address {
  @Relation({ type: 'owner', target: User }) user: User;
}
