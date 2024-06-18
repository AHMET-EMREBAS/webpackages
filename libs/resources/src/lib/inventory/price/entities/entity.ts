import { Entity, Column, BaseEntity, Relation } from '@webpackages/core';

@Entity()
export class Price extends BaseEntity {
  @Column({ type: 'number' }) price: number;
  @Column({ type: 'number' }) cost: number;

  @Relation({ type: 'owner', target: 'Sku' }) sku: unknown;
  @Relation({ type: 'owner', target: 'PriceLevel' }) priceLevel: unknown;
}
