import { Entity, Column, BaseEntity, Relation } from '@webpackages/core';

@Entity()
export class SerialNumber extends BaseEntity {
  @Column({ type: 'string', unique: true, update: false }) serialNumber: string;
  @Column({ type: 'boolean' }) inStock: boolean;
  @Relation({ type: 'owner', target: 'Product', eager: true }) product: unknown;
}
