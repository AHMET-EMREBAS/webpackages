import { Entity, Column, BaseEntity } from '@webpackages/core';
import { OneToMany } from 'typeorm';

@Entity()
export class Sku extends BaseEntity {
  @Column({ type: 'string', required: true, unique: true }) name: string;
  @Column({ type: 'string' }) description: string;
  @Column({ type: 'string', required: true, unique: true }) sku: string;

  @OneToMany('SkuDetail', (t) => (t as any).sku, { eager: true })
  skuDetails: unknown;
}
