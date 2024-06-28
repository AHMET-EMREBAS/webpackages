import { BaseEntity } from '@webpackages/types';

export interface IUserAddress extends BaseEntity {
  street: string;

  city: string;

  state: string;

  zip: string;
}
