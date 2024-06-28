import { BaseEntity } from '@webpackages/types';

export interface IUserProfile extends BaseEntity {
  firstName: string;

  lastName: string;

  middleName: string;
}
