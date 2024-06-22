import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { PurchaseOrder } from './purchase-order.entity';
import { PurchaseOrderMetadata } from '@webpackages/metadata';

import { Purchase } from '../purchase';
import { Sku } from '../sku';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<PurchaseOrder>(
      ds,
      PurchaseOrder,
      PurchaseOrderMetadata
    );
  },
})
export class PurchaseOrderView extends BaseView {
  @ViewColumn() price: number;
  @ViewColumn() quantity: number;
  @ViewColumn() subTotal: number;
  @ViewColumn() total: number;

  @ViewColumn() purchaseId: Purchase['id'];
  @ViewColumn() purchaseActive: Purchase['active'];
  @ViewColumn() skuSku: Sku['sku'];
  @ViewColumn() skuName: Sku['name'];
  @ViewColumn() skuId: Sku['id'];
  @ViewColumn() skuActive: Sku['active'];
}
