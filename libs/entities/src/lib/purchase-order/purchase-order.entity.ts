import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IPurchaseOrder } from '@webpackages/models';

import { Purchase } from '../purchase';
import { Sku } from '../sku';

@Entity()
export class PurchaseOrder extends BaseEntity implements IPurchaseOrder {
  @Column({ type: 'number', required: true }) price: number;
  @Column({ type: 'number', required: true }) quantity: number;
  @Column({ type: 'number', required: true }) subTotal: number;
  @Column({ type: 'number', required: true }) total: number;

  @Relation({ relationType: 'owner', target: Purchase }) purchase: Purchase;
  @Relation({ relationType: 'owner', target: Sku }) sku: Sku;
}
