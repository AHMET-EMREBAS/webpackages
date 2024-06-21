import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Product } from './product.entity';
import { Category } from '../category';
import { Supplier } from '../supplier';
import { ProductMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Product>(ds, Product, ProductMetadata);
  },
})
export class ProductView extends BaseView {
  @ViewColumn() name: string;
  @ViewColumn() description: string;
  @ViewColumn() upc: string;

  @ViewColumn() categoryName: Category;
  @ViewColumn() supplierName: Supplier;

  @ViewColumn() categoryId: string;
  @ViewColumn() supplierId: string;
}
