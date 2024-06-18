import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
