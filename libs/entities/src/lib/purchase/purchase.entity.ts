import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IPurchase } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class Purchase extends BaseEntity implements IPurchase {
  @Column({ type: 'date', required: true, unique: false })
  orderDate: Date;

  @Column({ type: 'date', required: true, unique: false })
  expectedShippingDate: Date;

  @Column({ type: 'date', required: false, unique: false })
  shippingDate: Date;

  @Column({ type: 'number', required: true, unique: false })
  subTotal: number;

  @Column({ type: 'number', required: true, unique: false })
  total: number;

  @Column({ type: 'string', required: false, unique: false })
  notes: string;

  @Relation({ relationType: 'owner', target: User })
  user: User;
}
