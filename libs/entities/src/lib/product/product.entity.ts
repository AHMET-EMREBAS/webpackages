import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IProduct } from '@webpackages/models';

@Entity()
export class Product extends BaseEntity implements IProduct {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
