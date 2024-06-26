import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IInbox extends BaseEntity {
  employee: IUser;
}
