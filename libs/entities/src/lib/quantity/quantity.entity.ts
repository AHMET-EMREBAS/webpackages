import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IQuantity } from '@webpackages/models';
import { Sku } from '../sku';
import { Store } from '../store';

@Entity()
export class Quantity extends BaseEntity implements IQuantity {
  @Column({ type: 'number', required: true, unique: false })
  quantity: number;

  @Column({ type: 'boolean', required: false, unique: false })
  alert: boolean;

  @Column({ type: 'number', required: false, unique: false })
  alertUnderQuantity: number;

  @Column({ type: 'boolean', required: false, unique: false })
  autoRepurchase: boolean;

  @Column({ type: 'boolean', required: false, unique: false })
  notSellLastOne: boolean;

  @Relation({ relationType: 'owner', target: Sku })
  sku: Sku;

  @Relation({ relationType: 'owner', target: Store })
  store: Store;
}
