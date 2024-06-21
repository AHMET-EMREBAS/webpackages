import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IPrice } from '@webpackages/models';

import { Sku } from '../sku';
import { PriceLevel } from '../price-level';

@Entity()
export class Price extends BaseEntity implements IPrice {
  @Column({ type: 'number', required: true, unique: false })
  price: number;

  @Column({ type: 'number', required: true, unique: false })
  cost: number;

  @Column({ type: 'date', required: true, unique: false })
  startDate: Date;

  @Column({ type: 'date', required: true, unique: false })
  endDate: Date;

  @Relation({ relationType: 'owner', target: Sku })
  sku: Sku;

  @Relation({ relationType: 'owner', target: PriceLevel })
  priceLevel: PriceLevel;
}
