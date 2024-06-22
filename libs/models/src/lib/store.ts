import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IStore extends BaseEntity {
  name: string;

  manager: IUser;
}
