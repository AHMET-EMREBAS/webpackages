import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IDiscount } from '@webpackages/models';

import { Sku } from '../sku';

@Entity()
export class Discount extends BaseEntity implements IDiscount {
  @Column({ type: 'number', required: false, unique: false })
  fixedDiscount: number;

  @Column({ type: 'number', required: false, unique: false })
  percentDiscount: number;

  @Column({ type: 'date', required: true, unique: false })
  startDate: Date;

  @Column({ type: 'date', required: true, unique: false })
  endDate: Date;

  @Relation({ relationType: 'owner', target: Sku })
  sku: Sku;
}
