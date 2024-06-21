import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { ICart } from '@webpackages/models';

@Entity()
export class Cart extends BaseEntity implements ICart {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
