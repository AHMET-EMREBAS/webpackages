import { BaseEntity } from '@webpackages/types';

export interface ISale extends BaseEntity {
  subTotal: number;

  total: number;

  creditCardPayment: number;

  cashPayment: number;

  balancePayment: number;

  customerId: number;

  employeeId: number;
}
