import { Entity, Column, BaseEntity, Relation } from '@webpackages/core';

@Entity()
export class Price extends BaseEntity {
  @Column({ type: 'number', required: true }) price: number;
  @Column({ type: 'number', required: true }) cost: number;
  @Column({ type: 'string', required: true }) currency: string;

  @Relation({ type: 'owner', target: 'Sku', eager: true })
  sku: unknown;

  @Relation({ type: 'owner', target: 'PriceLevel', eager: true })
  priceLevel: unknown;
}
