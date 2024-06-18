import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class PriceLevel extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
