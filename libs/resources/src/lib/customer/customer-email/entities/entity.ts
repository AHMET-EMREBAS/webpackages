import { Entity, Relation } from '@webpackages/core';
import { Email } from '../../../common';

@Entity()
export class CustomerEmail extends Email {
  @Relation({ type: 'owner', target: 'Customer' }) user: unknown
}
