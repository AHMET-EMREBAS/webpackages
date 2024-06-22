import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISale } from '@webpackages/models';

@Entity()
export class Sale extends BaseEntity implements ISale {
  @Column({ type: 'number', required: true, unique: false }) subTotal: number;
  @Column({ type: 'number', required: true, unique: false }) total: number;
  @Column({ type: 'number', required: false, unique: false })
  creditCardPayment: number;
  @Column({ type: 'number', required: false, unique: false })
  cashPayment: number;
  @Column({ type: 'number', required: false, unique: false })
  balancePayment: number;
  @Column({ type: 'number', required: false, unique: false })
  customerId: number;
  @Column({ type: 'number', required: false, unique: false })
  employeeId: number;
}
