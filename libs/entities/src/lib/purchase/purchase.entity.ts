import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IPurchase } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class Purchase extends BaseEntity implements IPurchase {
  @Column({ type: 'date', required: true }) orderDate: Date;
  @Column({ type: 'date', required: true }) expectedShippingDate: Date;
  @Column({ type: 'date' }) shippingDate: Date;
  @Column({ type: 'number', required: true }) subTotal: number;
  @Column({ type: 'number', required: true }) total: number;
  @Column({ type: 'string' }) notes: string;

  @Relation({ relationType: 'owner', target: User }) user: User;
}
