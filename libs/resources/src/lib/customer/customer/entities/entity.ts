import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Customer extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
