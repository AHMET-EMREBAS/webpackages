import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { ISkuDetail } from '@webpackages/models';

@Entity()
export class SkuDetail extends BaseEntity implements ISkuDetail {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
