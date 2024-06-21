import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ICustomer } from '@webpackages/models';
import { PriceLevel } from '../price-level';

@Entity()
export class Customer extends BaseEntity implements ICustomer {
  @Column({ type: 'string', required: true, unique: true })
  username: string;

  @Column({ type: 'string', required: true, unique: true })
  passwrod: string;

  @Column({ type: 'object', required: false, unique: false })
  permissions: object;

  @Relation({ relationType: 'one', target: PriceLevel })
  priceLevel: PriceLevel;
}
