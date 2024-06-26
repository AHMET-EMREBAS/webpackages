import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IPurchase extends BaseEntity {
  orderDate: Date;

  expectedShippingDate: Date;

  shippingDate: Date;

  subTotal: number;

  total: number;

  notes: string;

  employee: IUser;
}
