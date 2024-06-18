import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class CustomerProfile extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
