import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IUserAddress extends BaseEntity {
  street: string;

  city: string;

  state: string;

  zip: string;

  user: IUser;
}
