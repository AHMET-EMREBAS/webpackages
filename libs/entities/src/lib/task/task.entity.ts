import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { ITask } from '@webpackages/models';

@Entity()
export class Task extends BaseEntity implements ITask {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
