import { Entity, Column, BaseEntity, Relation } from '@webpackages/core';

@Entity()
export class Discount extends BaseEntity {
  @Column({ type: 'number', defaultValue: 0, update: false })
  percentDiscount: number;

  @Column({ type: 'number', defaultValue: 0, update: false })
  fixedDiscount: number;

  @Column({ type: 'number', required: true })
  currency: string;

  @Relation({ type: 'owner', target: 'Sku', eager: true })
  sku: unknown;
}
