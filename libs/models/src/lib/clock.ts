import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IClock extends BaseEntity {
  starDate: Date;

  endDate: Date;

  employee: IUser;
}
