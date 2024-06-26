import { BaseEntity } from '@webpackages/types';
import { IDepartment } from './department';

export interface IUser extends BaseEntity {
  username: string;

  password: string;

  permissions: object;

  department: IDepartment;
}
