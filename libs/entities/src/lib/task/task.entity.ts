import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ITask } from '@webpackages/models';
import { User } from '../user';

@Entity()
export class Task extends BaseEntity implements ITask {
  @Column({ type: 'string', required: true, unique: true })
  name: string;

  @Column({ type: 'string', required: false, unique: false })
  tags: string;

  @Column({ type: 'date', required: true, unique: false })
  dueDate: Date;

  @Column({ type: 'date', required: false, unique: false })
  startDate: Date;

  @Column({ type: 'date', required: false, unique: false })
  endDate: Date;

  @Column({ type: 'string', required: false, unique: false })
  description: string;

  @Column({ type: 'undefined', required: false, unique: false })
  status: undefined;

  @Column({ type: 'undefined', required: false, unique: false })
  difficulty: undefined;

  @Relation({ relationType: 'many', target: User })
  users: User[];
}
