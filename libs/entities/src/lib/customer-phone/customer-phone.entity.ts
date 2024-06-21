import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { ICustomerPhone } from '@webpackages/models';

@Entity()
export class CustomerPhone extends BaseEntity implements ICustomerPhone {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
