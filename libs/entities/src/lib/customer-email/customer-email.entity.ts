import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ICustomerEmail } from '@webpackages/models';
import { Customer } from '../customer';

@Entity()
export class CustomerEmail extends BaseEntity implements ICustomerEmail {
  @Column({ type: 'string', required: true, unique: false })
  email: string;

  @Relation({ relationType: 'owner', target: Customer })
  user: Customer;
}
