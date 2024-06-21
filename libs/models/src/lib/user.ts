import { BaseEntity } from '@webpackages/types';

export interface IUser extends BaseEntity {
  username: string;

  passwrod: string;

  permissions: object;
}
