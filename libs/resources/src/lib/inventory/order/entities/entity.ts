import { Entity, Column, BaseEntity, Relation } from '@webpackages/core';

@Entity()
export class Order extends BaseEntity {
  @Column({ type: 'number' }) quantity: number;
  @Relation({ type: 'owner', target: 'Sku', eager: true }) sku: unknown;
  @Relation({ type: 'owner', target: 'Cart', eager: true }) cart: unknown;
}
