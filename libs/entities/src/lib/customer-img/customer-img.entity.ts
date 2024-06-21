import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ICustomerImg } from '@webpackages/models';

import { Customer } from '../customer';

@Entity()
export class CustomerImg extends BaseEntity implements ICustomerImg {
  @Column({ type: 'string', required: false, unique: false }) title: string;
  @Column({ type: 'string', required: false, unique: false })
  generatedName: string;

  @Relation({ relationType: 'owner', target: Customer }) user: Customer;
}
