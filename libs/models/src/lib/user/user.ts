import { AccessPolicy, BaseEntity } from '@webpackages/types';

export class User extends BaseEntity {
  username: string;
  password: string;
  permissions: AccessPolicy;
}
