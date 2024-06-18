import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class UserImage extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
