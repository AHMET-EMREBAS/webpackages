import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
