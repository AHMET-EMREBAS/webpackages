import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Message extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
