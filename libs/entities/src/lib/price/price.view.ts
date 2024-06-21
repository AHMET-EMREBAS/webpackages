import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Price } from './price.entity';
import { PriceMetadata } from '@webpackages/metadata';

import { Sku } from '../sku';
import { PriceLevel } from '../price-level';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Price>(ds, Price, PriceMetadata);
  },
})
export class PriceView extends BaseView {
  @ViewColumn() price: number;
  @ViewColumn() cost: number;
  @ViewColumn() startDate: Date;
  @ViewColumn() endDate: Date;

  @ViewColumn() skuId: Sku['id'];
  @ViewColumn() skuActive: Sku['active'];
  @ViewColumn() priceLevelId: PriceLevel['id'];
  @ViewColumn() priceLevelActive: PriceLevel['active'];
}
