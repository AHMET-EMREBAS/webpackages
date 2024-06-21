import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Sku } from './sku.entity';
import { SkuMetadata } from '@webpackages/metadata';

import { Product } from '../product';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Sku>(ds, Sku, SkuMetadata);
  },
})
export class SkuView extends BaseView {
  @ViewColumn() name: string;
  @ViewColumn() description: string;
  @ViewColumn() sku: string;

  @ViewColumn() productId: Product['id'];
  @ViewColumn() productActive: Product['active'];
}
