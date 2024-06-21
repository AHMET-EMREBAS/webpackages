import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ICustomerPhone } from '@webpackages/models';

import { Customer } from '../customer';

@Entity()
export class CustomerPhone extends BaseEntity implements ICustomerPhone {
  @Column({ type: 'string', required: true, unique: false }) phone: string;

  @Relation({ relationType: 'owner', target: Customer }) user: Customer;
}