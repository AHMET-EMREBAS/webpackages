import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { ICustomerAddress } from '@webpackages/models';

@Entity()
export class CustomerAddress extends BaseEntity implements ICustomerAddress {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
