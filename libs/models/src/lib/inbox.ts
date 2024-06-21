import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';
import { IMessage } from './message';

export interface IInbox extends BaseEntity {
  user: IUser;

  sent: IMessage[];

  received: IMessage[];
}
