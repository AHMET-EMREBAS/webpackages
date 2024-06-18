import { Entity, Column, BaseEntity, Relation } from '@webpackages/core';

@Entity()
export class Quantity extends BaseEntity {
  @Column({ type: 'number' }) quantity: number;
  @Relation({ type: 'owner', target: 'Sku' }) sku: unknown;
  @Relation({ type: 'owner', target: 'Store' }) store: unknown;
}
