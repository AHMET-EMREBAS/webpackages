import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Supplier extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
