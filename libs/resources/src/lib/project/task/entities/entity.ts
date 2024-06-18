import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Task extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
