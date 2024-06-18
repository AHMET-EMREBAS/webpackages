import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Manufacturer extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
