import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ICustomerImg } from '@webpackages/models';

import { Customer } from '../customer';

@Entity()
export class CustomerImg extends BaseEntity implements ICustomerImg {
  @Column({ type: 'string' }) title: string;
  @Column({ type: 'string' }) generatedName: string;

  @Relation({ relationType: 'owner', target: Customer }) customer: Customer;
}
