import { BaseEntity } from '@webpackages/types';
import { ICustomer } from './customer';

export interface ICustomerImg extends BaseEntity {
  title: string;

  generatedName: string;

  customer: ICustomer;
}
