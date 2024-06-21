import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';
import { IPurchaseOrder } from './purchase-order';

export interface IPurchase extends BaseEntity {
  orderDate: Date;

  expectedShippingDate: Date;

  shippingDate: Date;

  subTotal: number;

  total: number;

  notes: string;

  user: IUser;

  orders: IPurchaseOrder;
}
