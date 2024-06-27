import { BaseEntity } from '@webpackages/types';
import { ICustomer } from './customer';
import { IUser } from './user';

export interface ICart extends BaseEntity {
  complete: boolean;

  customer: ICustomer;

  employee: IUser;
}
