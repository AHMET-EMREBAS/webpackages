import { Entity, Column, BaseEntity, Relation } from '@webpackages/core';

@Entity()
export class SkuDetail extends BaseEntity {
  @Column({ type: 'string' })
  key: string;

  @Column({ type: 'string' })
  value: string;

  @Relation({ type: 'owner', target: 'Sku' }) sku: unknown;
}
