import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class UserProfile extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
