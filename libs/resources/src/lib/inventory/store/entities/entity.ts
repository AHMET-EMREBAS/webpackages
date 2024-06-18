import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Store extends BaseEntity {
  @Column({ type: 'string', unique: true })
  name: string;
}
