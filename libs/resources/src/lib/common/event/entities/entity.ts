import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Event extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
