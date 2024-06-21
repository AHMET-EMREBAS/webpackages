import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { ICustomerProfile } from '@webpackages/models';

@Entity()
export class CustomerProfile extends BaseEntity implements ICustomerProfile {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
