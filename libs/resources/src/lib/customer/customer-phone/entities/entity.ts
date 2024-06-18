import { Entity, Relation } from '@webpackages/core';
import { Phone } from '../../../common';

@Entity()
export class CustomerPhone extends Phone {
  @Relation({ type: 'owner', target: 'Customer' }) user: unknown;
}
