import { Entity, Relation } from '@webpackages/core';
import { Img } from '../../../common';
import { User } from '../../user/entities';

@Entity()
export class UserImg extends Img {
  @Relation({ type: 'owner', target: User }) user: User;
}
