import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IPurchaseOrder } from '@webpackages/models';

import { Purchase } from '../purchase';
import { Sku } from '../sku';

@Entity()
export class PurchaseOrder extends BaseEntity implements IPurchaseOrder {
  @Column({ type: 'number', required: true, unique: false })
  price: number;

  @Column({ type: 'number', required: false, unique: false })
  quantity: number;

  @Column({ type: 'number', required: false, unique: false })
  subTotal: number;

  @Column({ type: 'number', required: false, unique: false })
  total: number;

  @Relation({ relationType: 'owner', target: Purchase })
  purchase: Purchase;

  @Relation({ relationType: 'owner', target: Sku })
  sku: Sku;
}
