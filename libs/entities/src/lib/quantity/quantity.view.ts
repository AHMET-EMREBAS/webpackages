import { BaseView } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Quantity } from './quantity.entity';

import { Sku } from '../sku';
import { Store } from '../store';

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

      .addSelect('main.quantity', 'quantity')
      .addSelect('main.alert', 'alert')
      .addSelect('main.alertUnderQuantity', 'alertUnderQuantity')
      .addSelect('main.autoRepurchase', 'autoRepurchase')
      .addSelect('main.notSellLastOne', 'notSellLastOne')

      .addSelect('sku.name', 'skuName')
      .addSelect('sku.sku', 'skuSku')
      .addSelect('sku.id', 'skuId')
      .addSelect('sku.active', 'skuActive')

      .addSelect('store.name', 'storeName')
      .addSelect('store.id', 'storeId')
      .addSelect('store.active', 'storeActive')

      .from(Quantity, 'main')

      .leftJoin(Sku, 'sku', 'main.skuId = sku.id')
      .leftJoin(Store, 'store', 'main.storeId = store.id');
  },
})
export class QuantityView extends BaseView {
  @ViewColumn() quantity: number;
  @ViewColumn() alert: boolean;
  @ViewColumn() alertUnderQuantity: number;
  @ViewColumn() autoRepurchase: boolean;
  @ViewColumn() notSellLastOne: boolean;

  @ViewColumn() skuSku: Sku['sku'];
  @ViewColumn() skuName: Sku['name'];
  @ViewColumn() skuId: Sku['id'];
  @ViewColumn() skuActive: Sku['active'];

  @ViewColumn() storeName: Store['name'];
  @ViewColumn() storeId: Store['id'];
  @ViewColumn() storeActive: Store['active'];
}
