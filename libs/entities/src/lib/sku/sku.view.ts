import { BaseView } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Sku } from './sku.entity';

import { Product } from '../product';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()

      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'eid')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.name', 'name')
      .addSelect('main.description', 'description')
      .addSelect('main.sku', 'sku')

      .addSelect('product.upc', 'productUpc')
      .addSelect('product.id', 'productId')
      .addSelect('product.active', 'productActive')

      .from(Sku, 'main')
      .leftJoin(Product, 'product', 'main.productId = product.id');
  },
})
export class SkuView extends BaseView {
  @ViewColumn() name: string;
  @ViewColumn() description: string;
  @ViewColumn() sku: string;

  @ViewColumn() productUpc: Product['upc'];
  @ViewColumn() productId: Product['id'];
  @ViewColumn() productActive: Product['active'];
}
