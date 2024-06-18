import { Entity, Column, BaseEntity, Relation } from '@webpackages/core';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'string', unique: true }) name: string;
  @Column({ type: 'string', unique: true }) upc: string;
  @Column({ type: 'string' }) description: string;
  @Column({ type: 'string' }) brand: string;
  @Relation({ type: 'one', target: 'Supplier' }) supplier: unknown;
  @Relation({ type: 'one', target: 'Category' }) category: unknown;
}
