import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { ICustomer } from '@webpackages/models';

@Entity()
export class Customer extends BaseEntity implements ICustomer {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
