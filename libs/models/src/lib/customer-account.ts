import { BaseEntity } from '@webpackages/types';
import { ICustomer } from './customer';
import { IPriceLevel } from './price-level';

export interface ICustomerAccount extends BaseEntity {
  blance: number;

  user: ICustomer;

  priceLevel: IPriceLevel;
}
