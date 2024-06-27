import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IQuantity } from '@webpackages/models';

import { Sku } from '../sku';
import { Store } from '../store';

@Entity()
export class Quantity extends BaseEntity implements IQuantity {
  @Column({ type: 'number', required: true }) quantity: number;
  @Column({ type: 'boolean' }) alert: boolean;
  @Column({ type: 'number' }) alertUnderQuantity: number;
  @Column({ type: 'boolean' }) autoRepurchase: boolean;
  @Column({ type: 'boolean' }) notSellLastOne: boolean;

  @Relation({ relationType: 'owner', target: Sku }) sku: Sku;
  @Relation({ relationType: 'owner', target: Store }) store: Store;
}
