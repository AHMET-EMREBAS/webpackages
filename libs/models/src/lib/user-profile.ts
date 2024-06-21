import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IUserProfile extends BaseEntity {
  firstName: string;

  lastName: string;

  middleName: string;

  user: IUser;
}
