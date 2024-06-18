import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class CustomerPhone extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
