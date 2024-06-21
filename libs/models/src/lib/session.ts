import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface ISession extends BaseEntity {
  user: IUser;
}
