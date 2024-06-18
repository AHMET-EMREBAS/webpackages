import { Entity, Relation } from '@webpackages/core';
import { Address } from '../../../common';

@Entity()
export class CustomerAddress extends Address {
  @Relation({ type: 'owner', target: 'Customer' }) user: unknown;
}
