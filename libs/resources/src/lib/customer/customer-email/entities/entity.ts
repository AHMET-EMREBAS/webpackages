import { Entity, Relation } from '@webpackages/core';
import { Email } from '../../../common';
import { Customer } from '../../customer/entities';

@Entity()
export class CustomerEmail extends Email {
  @Relation({ type: 'owner', target: Customer }) user: Customer;
}
