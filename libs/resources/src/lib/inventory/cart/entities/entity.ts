import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Cart extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
