import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Discount extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
