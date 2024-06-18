import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Project extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
