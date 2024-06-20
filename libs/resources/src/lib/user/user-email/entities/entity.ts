import { Entity, Relation } from '@webpackages/core';
import { Email } from '../../../common';
import { User } from '../../user';

@Entity()
export class UserEmail extends Email {
  @Relation({ type: 'owner', target: User }) user: User;
}
