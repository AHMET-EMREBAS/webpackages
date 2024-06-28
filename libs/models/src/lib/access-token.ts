import { BaseEntity } from '@webpackages/types';
import { AccessPolicy } from '@webpackages/types';

export interface IAccessToken extends BaseEntity {
  name: string;

  token: string;

  permissions: AccessPolicy;
}
