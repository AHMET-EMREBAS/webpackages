import { BaseEntity } from '@webpackages/types';
import { ICustomer } from './customer';

export interface ICustomerEmail extends BaseEntity {
  email: string;

  user: ICustomer;
}
