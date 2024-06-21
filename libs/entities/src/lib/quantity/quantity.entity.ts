import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IQuantity } from '@webpackages/models';

@Entity()
export class Quantity extends BaseEntity implements IQuantity {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
