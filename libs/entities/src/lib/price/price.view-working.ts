import { BaseView } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Price } from './price.entity';

import { Sku, SkuView } from '../sku';
import { PriceLevel, PriceLevelView } from '../price-level';

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


      // <%- selectedProperties %>
      .addSelect('main.price', 'price')
      .addSelect('main.cost', 'cost')
      .addSelect('main.startDate', 'startDate')
      .addSelect('main.endDate', 'endDate')


      // <%- selectedRelationProperties %>
      .addSelect('sku.name', 'skuName')
      .addSelect('sku.sku', 'skuSku')
      .addSelect('sku.id', 'skuId')
      .addSelect('sku.active', 'skuActive')


      .addSelect('priceLevel.name', 'priceLevelName')
      .addSelect('priceLevel.id', 'priceLevelId')
      .addSelect('priceLevel.active', 'priceLevelActive')

      .from(Price, 'main')

      // <%- relationJoins %>
      .leftJoin(SkuView, 'sku', 'main.skuId = sku.id')
      .leftJoin(
        PriceLevelView,
        'priceLevel',
        'priceLevel.eid = main.priceLevelId'
      );
  },
})
export class PriceView extends BaseView {
  @ViewColumn() price: number;
  @ViewColumn() cost: number;
  @ViewColumn() startDate: Date;
  @ViewColumn() endDate: Date;

  @ViewColumn() skuName: Sku['name'];
  @ViewColumn() skuSku: Sku['sku'];
  @ViewColumn() skuId: Sku['id'];
  @ViewColumn() skuActive: Sku['active'];
  @ViewColumn() priceLevelName: PriceLevel['name'];
  @ViewColumn() priceLevelId: PriceLevel['id'];
  @ViewColumn() priceLevelActive: PriceLevel['active'];
}
