import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IMessage extends BaseEntity {
  message: string;

  readDate: Date;

  fromUser: IUser;

  toUser: IUser;
}
