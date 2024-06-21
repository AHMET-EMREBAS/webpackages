import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IOrder } from '@webpackages/models';

@Entity()
export class Order extends BaseEntity implements IOrder {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
