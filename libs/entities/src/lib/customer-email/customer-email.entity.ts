import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { ICustomerEmail } from '@webpackages/models';

@Entity()
export class CustomerEmail extends BaseEntity implements ICustomerEmail {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
