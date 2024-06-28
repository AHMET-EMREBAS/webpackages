import { BaseEntity } from '@webpackages/types';
import { IDepartment } from './department';
import { AccessPolicy } from '@webpackages/types';

export interface IUser extends BaseEntity {
  username: string;

  password: string;

  permissions: AccessPolicy;

  department: IDepartment;
}
