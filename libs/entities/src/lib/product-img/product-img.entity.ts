import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IProductImg } from '@webpackages/models';

import { Product } from '../product';

@Entity()
export class ProductImg extends BaseEntity implements IProductImg {
  @Column({ type: 'string' }) title: string;
  @Column({ type: 'string' }) generatedName: string;

  @Relation({ relationType: 'owner', target: Product }) product: Product;
}
