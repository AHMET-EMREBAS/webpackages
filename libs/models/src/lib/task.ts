import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface ITask extends BaseEntity {
  name: string;

  tags: string;

  dueDate: Date;

  startDate: Date;

  endDate: Date;

  description: string;

  status: undefined;

  difficulty: undefined;

  users: IUser[];
}
