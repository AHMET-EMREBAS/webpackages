import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { ISku } from '@webpackages/models';

@Entity()
export class Sku extends BaseEntity implements ISku {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
