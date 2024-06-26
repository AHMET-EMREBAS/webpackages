import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISku } from '@webpackages/models';

import { Product } from '../product';

@Entity()
export class Sku extends BaseEntity implements ISku {
  @Column({ type: 'string', required: true, unique: true }) name: string;
  @Column({ type: 'string', required: true, unique: true, format: 'barcode' })
  sku: string;
  @Column({ type: 'string' }) description: string;

  @Relation({ relationType: 'owner', target: Product }) product: Product;
}
