import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ICustomerAccount } from '@webpackages/models';

import { Customer } from '../customer';
import { PriceLevel } from '../price-level';

@Entity()
export class CustomerAccount extends BaseEntity implements ICustomerAccount {
  @Column({ type: 'number', required: true }) blance: number;

  @Relation({ relationType: 'owner', target: Customer }) user: Customer;
  @Relation({ relationType: 'one', target: PriceLevel }) priceLevel: PriceLevel;
}
