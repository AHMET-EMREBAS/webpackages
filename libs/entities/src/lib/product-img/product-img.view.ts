import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { ProductImg } from './product-img.entity';
import { ProductImgMetadata } from '@webpackages/metadata';

import { Product } from '../product';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<ProductImg>(ds, ProductImg, ProductImgMetadata);
  },
})
export class ProductImgView extends BaseView {
  @ViewColumn() title: string;
  @ViewColumn() generatedName: string;

  @ViewColumn() productId: Product['id'];
  @ViewColumn() productActive: Product['active'];
}
