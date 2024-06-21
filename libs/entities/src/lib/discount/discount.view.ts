import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Discount } from './discount.entity';
import { DiscountMetadata } from '@webpackages/metadata';

import { Sku } from '../sku';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Discount>(ds, Discount, DiscountMetadata);
  },
})
export class DiscountView extends BaseView {
  @ViewColumn() fixedDiscount: number;
  @ViewColumn() percentDiscount: number;
  @ViewColumn() startDate: Date;
  @ViewColumn() endDate: Date;

  @ViewColumn() skuId: Sku['id'];
  @ViewColumn() skuActive: Sku['active'];
}
