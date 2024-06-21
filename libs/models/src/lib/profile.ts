import { BaseEntity } from '@webpackages/types';

export interface IProfile extends BaseEntity {
  firstName: string;

  lastName: string;

  middleName: string;
}
