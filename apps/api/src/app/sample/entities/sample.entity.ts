import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Sample extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
