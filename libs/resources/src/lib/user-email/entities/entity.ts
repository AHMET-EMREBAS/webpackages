import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class UserEmail extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
