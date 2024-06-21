import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISerialNumber } from '@webpackages/models';

import { Sku } from '../sku';

@Entity()
export class SerialNumber extends BaseEntity implements ISerialNumber {
  @Column({ type: 'string', required: false, unique: false })
  serialNumber: string;
  @Column({ type: 'boolean', required: true, unique: false }) inStock: boolean;
  @Column({ type: 'boolean', required: false, unique: false })
  generated: boolean;

  @Relation({ relationType: 'owner', target: Sku }) sku: Sku;
}
