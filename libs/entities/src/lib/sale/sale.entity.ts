import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISale } from '@webpackages/models';

@Entity()
export class Sale extends BaseEntity implements ISale {
  @Column({ type: 'number', required: true }) subTotal: number;
  @Column({ type: 'number', required: true }) total: number;
  @Column({ type: 'number' }) creditCardPayment: number;
  @Column({ type: 'number' }) cashPayment: number;
  @Column({ type: 'number' }) balancePayment: number;
  @Column({ type: 'number' }) customerId: number;
  @Column({ type: 'number' }) employeeId: number;
}
