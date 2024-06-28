import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface ITask extends BaseEntity {
  name: string;

  description: string;

  tags: string[];

  difficulty: string;

  status: string;

  startDate: Date;

  endDate: Date;

  dueDate: Date;

  users: IUser;
}
