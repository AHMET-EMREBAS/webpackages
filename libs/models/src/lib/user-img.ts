import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IUserImg extends BaseEntity {
  title: string;

  generatedName: string;

  user: IUser;
}
