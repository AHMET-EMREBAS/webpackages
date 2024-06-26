import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IOrder } from '@webpackages/models';

import { Sku } from '../sku';
import { Cart } from '../cart';
import { Discount } from '../discount';

@Entity()
export class Order extends BaseEntity implements IOrder {
  @Column({ type: 'number', required: true }) unitPrice: number;
  @Column({ type: 'number', required: true }) subTotal: number;
  @Column({ type: 'number' }) quantity: number;

  @Relation({ relationType: 'owner', target: Sku }) sku: Sku;
  @Relation({ relationType: 'owner', target: Cart }) cart: Cart;
  @Relation({ relationType: 'one', target: Discount }) discount: Discount;
}
