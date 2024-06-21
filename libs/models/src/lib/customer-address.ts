import { BaseEntity } from '@webpackages/types';
import { ICustomer } from './customer';

export interface ICustomerAddress extends BaseEntity {
  street: string;

  city: string;

  state: string;

  zip: string;

  user: ICustomer;
}
