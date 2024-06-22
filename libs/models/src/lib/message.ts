import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IMessage extends BaseEntity {
  message: string;

  readDate: Date;

  user: IUser;

  to: IUser;
}
