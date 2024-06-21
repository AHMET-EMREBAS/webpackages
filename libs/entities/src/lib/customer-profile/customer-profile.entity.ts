import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ICustomerProfile } from '@webpackages/models';
import { Customer } from '../customer';

@Entity()
export class CustomerProfile extends BaseEntity implements ICustomerProfile {
  @Column({ type: 'string', required: true, unique: false })
  firstName: string;

  @Column({ type: 'string', required: true, unique: false })
  lastName: string;

  @Column({ type: 'string', required: false, unique: false })
  middleName: string;

  @Relation({ relationType: 'owner', target: Customer })
  user: Customer;
}
