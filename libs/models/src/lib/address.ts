import { BaseEntity } from '@webpackages/types';

export interface IAddress extends BaseEntity {
  street: string;

  city: string;

  state: string;

  zip: string;
}
