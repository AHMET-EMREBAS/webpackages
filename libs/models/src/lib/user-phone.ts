import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IUserPhone extends BaseEntity {
  phone: string;

  user: IUser;
}
