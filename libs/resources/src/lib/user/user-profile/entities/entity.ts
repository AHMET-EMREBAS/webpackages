import { Entity, Relation } from '@webpackages/core';
import { Profile } from '../../../common';
import { User } from '../../user/';

@Entity()
export class UserProfile extends Profile {
  @Relation({ type: 'owner', target: User }) user: User;
}
