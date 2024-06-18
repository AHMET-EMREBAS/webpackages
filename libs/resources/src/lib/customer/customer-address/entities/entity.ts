import { Entity, Relation } from '@webpackages/core';
import { Address } from '../../../common';
import { Customer } from '../../customer/entities';

@Entity()
export class CustomerAddress extends Address {
  @Relation({ type: 'owner', target: Customer }) user: Customer;
}
