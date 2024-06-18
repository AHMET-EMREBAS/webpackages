import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Department extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
