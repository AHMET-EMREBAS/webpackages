import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISerialNumber } from '@webpackages/models';

import { Sku } from '../sku';

@Entity()
export class SerialNumber extends BaseEntity implements ISerialNumber {
  @Column({ type: 'string', required: true, unique: true })
  serialNumber: string;
  @Column({ type: 'boolean' }) inStock: boolean;
  @Column({ type: 'boolean' }) generated: boolean;

  @Relation({ relationType: 'owner', target: Sku }) sku: Sku;
}
