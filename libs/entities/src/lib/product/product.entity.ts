import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IProduct } from '@webpackages/models';

import { Category } from '../category';
import { Supplier } from '../supplier';

@Entity()
export class Product extends BaseEntity implements IProduct {
  @Column({ type: 'string', required: true, unique: true })
  name: string;

  @Column({ type: 'string', required: false, unique: false })
  description: string;

  @Column({ type: 'string', required: true, unique: true })
  upc: string;

  @Relation({ relationType: 'one', target: Category })
  category: Category;

  @Relation({ relationType: 'one', target: Supplier })
  supplier: Supplier;
}
