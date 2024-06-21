import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Order } from './order.entity';
import { OrderMetadata } from '@webpackages/metadata';

import { Sku } from '../sku';
import { Cart } from '../cart';
import { Discount } from '../discount';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Order>(ds, Order, OrderMetadata);
  },
})
export class OrderView extends BaseView {
  @ViewColumn() unitPrice: number;
  @ViewColumn() subTotal: number;
  @ViewColumn() quantity: number;

  @ViewColumn() skuId: Sku['id'];
  @ViewColumn() skuActive: Sku['active'];
  @ViewColumn() cartId: Cart['id'];
  @ViewColumn() cartActive: Cart['active'];
  @ViewColumn() discountId: Discount['id'];
  @ViewColumn() discountActive: Discount['active'];
}
