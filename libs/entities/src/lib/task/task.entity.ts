import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ITask } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class Task extends BaseEntity implements ITask {
  @Column({ type: 'string', required: true, unique: true }) name: string;
  @Column({ type: 'string' }) description: string;
  @Column({ type: 'string', isArray: true }) tags: string[];
  @Column({ type: 'string' }) difficulty: string;
  @Column({ type: 'string' }) status: string;
  @Column({ type: 'date' }) startDate: Date;
  @Column({ type: 'date' }) endDate: Date;
  @Column({ type: 'date', required: true }) dueDate: Date;

  @Relation({ relationType: 'one', target: User }) users: User;
}
