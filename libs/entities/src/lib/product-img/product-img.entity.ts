import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IProductImg } from '@webpackages/models';

@Entity()
export class ProductImg extends BaseEntity implements IProductImg {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
