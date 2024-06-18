import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Profile extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}