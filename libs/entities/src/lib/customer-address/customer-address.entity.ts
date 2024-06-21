import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ICustomerAddress } from '@webpackages/models';
import { Customer } from '../customer';

@Entity()
export class CustomerAddress extends BaseEntity implements ICustomerAddress {
  @Column({ type: 'string', required: false, unique: false })
  street: string;

  @Column({ type: 'string', required: false, unique: false })
  city: string;

  @Column({ type: 'string', required: false, unique: false })
  state: string;

  @Column({ type: 'string', required: false, unique: false })
  zip: string;

  @Relation({ relationType: 'owner', target: Customer })
  user: Customer;
}
