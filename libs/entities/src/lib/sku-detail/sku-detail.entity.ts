import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISkuDetail } from '@webpackages/models';

import { Sku } from '../sku';

@Entity()
export class SkuDetail extends BaseEntity implements ISkuDetail {
  @Column({ type: 'string', required: false, unique: false }) color: string;
  @Column({ type: 'string', required: false, unique: false }) height: string;
  @Column({ type: 'string', required: false, unique: false }) width: string;
  @Column({ type: 'string', required: false, unique: false }) weight: string;
  @Column({ type: 'string', required: false, unique: false }) manual: string;
  @Column({ type: 'string', required: false, unique: false }) make: string;
  @Column({ type: 'string', required: false, unique: false }) model: string;
  @Column({ type: 'string', required: false, unique: false }) notes: string;
  @Column({ type: 'string', required: false, unique: false }) website: string;
  @Column({ type: 'string', required: false, unique: false })
  manufacturer: string;
  @Column({ type: 'string', required: false, unique: false }) highlight: string;

  @Relation({ relationType: 'owner', target: Sku }) sku: Sku;
}
