import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface ISession extends BaseEntity {
  scope: string;

  deviceId: string;

  token: string;

  user: IUser;
}
