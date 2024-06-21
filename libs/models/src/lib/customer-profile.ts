import { BaseEntity } from '@webpackages/types';
import { ICustomer } from './customer';

export interface ICustomerProfile extends BaseEntity {
  firstName: string;

  lastName: string;

  middleName: string;

  user: ICustomer;
}
