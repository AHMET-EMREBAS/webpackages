import { AccessPolicy, BaseEntity } from '@webpackages/types';

export interface IAccessToken extends BaseEntity {
  name: string;
  token: string;
  permissions: AccessPolicy;
}
