import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class SkuDetail extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
