import { BaseEntity } from '@webpackages/types';
import { IPriceLevel } from './price-level';

export interface ICustomer extends BaseEntity {
  username: string;

  password: string;

  permissions: object;

  priceLevel: IPriceLevel;
}
