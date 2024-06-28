import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Quantity } from './quantity.entity';
import { QuantityMetadata } from '@webpackages/metadata';

import { Sku } from '../sku';
import { Store } from '../store';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Quantity>(ds, Quantity, QuantityMetadata);
  },
})
export class QuantityView extends BaseView {
  @ViewColumn() quantity: number;
  @ViewColumn() alert: boolean;
  @ViewColumn() alertUnderQuantity: number;
  @ViewColumn() autoRepurchase: boolean;
  @ViewColumn() notSellLastOne: boolean;

  @ViewColumn() skuName: Sku['name'];
  @ViewColumn() skuSku: Sku['sku'];
  @ViewColumn() skuId: Sku['id'];
  @ViewColumn() skuActive: Sku['active'];
  @ViewColumn() storeName: Store['name'];
  @ViewColumn() storeId: Store['id'];
  @ViewColumn() storeActive: Store['active'];
}
