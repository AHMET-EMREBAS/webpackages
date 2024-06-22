import { BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface ITask extends BaseEntity {
  name: string;

  description: string;

  tags: string[];

  dueDate: Date;

  startDate: Date;

  endDate: Date;

  status: string;

  difficulty: string;

  users: IUser[];
}
