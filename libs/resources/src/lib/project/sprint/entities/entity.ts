import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Sprint extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
