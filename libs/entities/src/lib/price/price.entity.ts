import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IPrice } from '@webpackages/models';

@Entity()
export class Price extends BaseEntity implements IPrice {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
