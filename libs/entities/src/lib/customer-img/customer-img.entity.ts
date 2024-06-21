import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { ICustomerImg } from '@webpackages/models';

@Entity()
export class CustomerImg extends BaseEntity implements ICustomerImg {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
