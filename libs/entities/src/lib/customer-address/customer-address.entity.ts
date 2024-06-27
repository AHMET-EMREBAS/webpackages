import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ICustomerAddress } from '@webpackages/models';

import { Customer } from '../customer';

@Entity()
export class CustomerAddress extends BaseEntity implements ICustomerAddress {
  @Column({ type: 'string', required: true }) street: string;
  @Column({ type: 'string', required: true }) city: string;
  @Column({ type: 'string', required: true }) state: string;
  @Column({ type: 'string', required: true }) zip: string;

  @Relation({ relationType: 'owner', target: Customer }) customer: Customer;
}
