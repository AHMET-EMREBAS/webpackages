import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Discount } from './discount.entity';
import { DiscountMetadata } from '@webpackages/metadata';

import { Sku } from '../sku';
import { PriceLevel } from '../price-level';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Discount>(ds, Discount, DiscountMetadata);
  },
})
export class DiscountView extends BaseView {
  @ViewColumn() name: string;
  @ViewColumn() fixedDiscount: number;
  @ViewColumn() percentDiscount: number;
  @ViewColumn() startDate: Date;
  @ViewColumn() endDate: Date;

  @ViewColumn() skuName: Sku['name'];
  @ViewColumn() skuSku: Sku['sku'];
  @ViewColumn() skuId: Sku['id'];
  @ViewColumn() skuActive: Sku['active'];
  @ViewColumn() priceLevelName: PriceLevel['name'];
  @ViewColumn() priceLevelCurrency: PriceLevel['currency'];
  @ViewColumn() priceLevelTaxrate: PriceLevel['taxrate'];
  @ViewColumn() priceLevelId: PriceLevel['id'];
  @ViewColumn() priceLevelActive: PriceLevel['active'];
}
