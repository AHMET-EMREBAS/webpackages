import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IDiscount } from '@webpackages/models';

import { Sku } from '../sku';
import { PriceLevel } from '../price-level';

@Entity()
export class Discount extends BaseEntity implements IDiscount {
  @Column({ type: 'string', required: true }) name: string;
  @Column({ type: 'number' }) fixedDiscount: number;
  @Column({ type: 'number' }) percentDiscount: number;
  @Column({ type: 'date', required: true }) startDate: Date;
  @Column({ type: 'date', required: true }) endDate: Date;

  @Relation({ relationType: 'owner', target: Sku }) sku: Sku;
  @Relation({ relationType: 'owner', target: PriceLevel })
  priceLevel: PriceLevel;
}
