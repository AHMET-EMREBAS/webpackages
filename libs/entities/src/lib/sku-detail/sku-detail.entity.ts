import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISkuDetail } from '@webpackages/models';

import { Sku } from '../sku';

@Entity()
export class SkuDetail extends BaseEntity implements ISkuDetail {
  @Column({ type: 'string' }) color: string;
  @Column({ type: 'string' }) height: string;
  @Column({ type: 'string' }) width: string;
  @Column({ type: 'string' }) weight: string;
  @Column({ type: 'string', format: 'url' }) manual: string;
  @Column({ type: 'string' }) make: string;
  @Column({ type: 'string' }) model: string;
  @Column({ type: 'string' }) notes: string;
  @Column({ type: 'string', format: 'url' }) website: string;
  @Column({ type: 'string' }) manufacturer: string;
  @Column({ type: 'string' }) highlight: string;

  @Relation({ relationType: 'owner', target: Sku }) sku: Sku;
}
