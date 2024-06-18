import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class ClockIn extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
