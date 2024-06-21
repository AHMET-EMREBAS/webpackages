import { BaseEntity } from '@webpackages/types';
import { ICustomer } from './customer';

export interface ICustomerPhone extends BaseEntity {
  phone: string;

  user: ICustomer;
}
