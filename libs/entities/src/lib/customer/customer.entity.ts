import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ICustomer } from '@webpackages/models';
import { AccessPolicy } from '@webpackages/types';
import { PriceLevel } from '../price-level';

@Entity()
export class Customer extends BaseEntity implements ICustomer {
  @Column({ type: 'string', required: true, unique: true, format: 'email' })
  username: string;
  @Column({ type: 'string', required: true, format: 'password' })
  password: string;
  @Column({ type: 'object' }) permissions: AccessPolicy;

  @Relation({ relationType: 'one', target: PriceLevel }) priceLevel: PriceLevel;
}
