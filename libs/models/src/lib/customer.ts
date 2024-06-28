import { BaseEntity } from '@webpackages/types';
import { IPriceLevel } from './price-level';
import { AccessPolicy } from '@webpackages/types';

export interface ICustomer extends BaseEntity {
  username: string;

  password: string;

  permissions: AccessPolicy;

  priceLevel: IPriceLevel;
}
