import { AccessPolicy } from '@webpackages/types';

export interface IUser {
  username: string;
  password: string;
  permissions: AccessPolicy;
}
