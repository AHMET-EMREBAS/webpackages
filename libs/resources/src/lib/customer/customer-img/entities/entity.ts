import { Entity, Relation } from '@webpackages/core';
import { Img } from '../../../common';

@Entity()
export class CustomerImg extends Img {
  @Relation({ type: 'owner', target: 'Customer' }) user: unknown;
}
