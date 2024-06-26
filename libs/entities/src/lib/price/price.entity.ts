import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IPrice } from '@webpackages/models';

import { Sku } from '../sku';
import { PriceLevel } from '../price-level';

@Entity()
export class Price extends BaseEntity implements IPrice {
  @Column({ type: 'number', required: true }) price: number;
  @Column({ type: 'number', required: true }) cost: number;
  @Column({ type: 'date', required: true }) startDate: Date;
  @Column({ type: 'date', required: true }) endDate: Date;

  @Relation({ relationType: 'owner', target: Sku }) sku: Sku;
  @Relation({ relationType: 'owner', target: PriceLevel })
  priceLevel: PriceLevel;
}
