import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Session extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
