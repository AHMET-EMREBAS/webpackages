import { Entity, Relation } from '@webpackages/core';
import { Phone } from '../../../common';
import { User } from '../../user/entities';

@Entity()
export class UserPhone extends Phone {
  @Relation({ type: 'owner', target: User }) user: User;
}
