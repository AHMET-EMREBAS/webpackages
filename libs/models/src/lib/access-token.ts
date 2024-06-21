import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IAccessToken extends BaseEntity {
  name: string;

  token: string;

  user: IUser;
}
