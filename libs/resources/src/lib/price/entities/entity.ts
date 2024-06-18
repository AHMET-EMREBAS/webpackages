import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Price extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
