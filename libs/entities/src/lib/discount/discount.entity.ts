import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IDiscount } from '@webpackages/models';

@Entity()
export class Discount extends BaseEntity implements IDiscount {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
