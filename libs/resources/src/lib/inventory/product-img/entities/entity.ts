import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class ProductImg extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
