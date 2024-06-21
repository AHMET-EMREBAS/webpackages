import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Product } from './product.entity';
import { ProductMetadata } from '@webpackages/metadata';

import { Category } from '../category';
import { Supplier } from '../supplier';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Product>(ds, Product, ProductMetadata);
  },
})
export class ProductView extends BaseView {
  @ViewColumn() name: string;
  @ViewColumn() description: string;
  @ViewColumn() upc: string;

  @ViewColumn() categoryId: Category['id'];
  @ViewColumn() categoryName: Category['name'];
  @ViewColumn() categoryActive: Category['active'];
  @ViewColumn() supplierId: Supplier['id'];
  @ViewColumn() supplierName: Supplier['name'];
  @ViewColumn() supplierActive: Supplier['active'];
}
