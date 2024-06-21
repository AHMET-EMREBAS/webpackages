import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IPurchase } from '@webpackages/models';

@Entity()
export class Purchase extends BaseEntity implements IPurchase {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
