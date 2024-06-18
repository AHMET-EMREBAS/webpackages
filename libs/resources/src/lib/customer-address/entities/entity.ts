import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class CustomerAddress extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
