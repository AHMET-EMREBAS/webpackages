import { Entity, Column, BaseEntity, Relation } from '@webpackages/core';

@Entity()
export class Task extends BaseEntity {
  @Column({ type: 'string', required: true })
  name: string;

  @Column({ type: 'string' })
  description: string;

  @Column({ type: 'date' })
  dueDate: Date;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ type: 'string' })
  status: string;

  @Relation({ type: 'many', target: 'User' }) assignees: unknown;
}
