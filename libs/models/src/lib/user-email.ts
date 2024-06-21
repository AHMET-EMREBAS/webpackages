import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IUserEmail extends BaseEntity {
  email: string;

  user: IUser;
}
