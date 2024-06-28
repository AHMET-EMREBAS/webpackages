import {BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { ProductAttribute } from './product-attribute.entity';
import { ProductAttributeMetadata } from '@webpackages/metadata';

import { Product } from '../product'

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<ProductAttribute>(ds, ProductAttribute, ProductAttributeMetadata);
  },
})
export class ProductAttributeView extends BaseView {

  @ViewColumn() key: string;
@ViewColumn() value: string;
  
  @ViewColumn() productName: Product['name'];
@ViewColumn() productUpc: Product['upc'];
@ViewColumn() productId: Product['id'];
@ViewColumn() productActive: Product['active'];
  
}
