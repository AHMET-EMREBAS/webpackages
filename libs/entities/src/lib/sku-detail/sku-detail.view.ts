import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { SkuDetail } from './sku-detail.entity';
import { SkuDetailMetadata } from '@webpackages/metadata';

import { Sku } from '../sku';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<SkuDetail>(ds, SkuDetail, SkuDetailMetadata);
  },
})
export class SkuDetailView extends BaseView {
  @ViewColumn() color: string;
  @ViewColumn() height: string;
  @ViewColumn() width: string;
  @ViewColumn() weight: string;
  @ViewColumn() manual: string;
  @ViewColumn() make: string;
  @ViewColumn() model: string;
  @ViewColumn() notes: string;
  @ViewColumn() website: string;
  @ViewColumn() manufacturer: string;
  @ViewColumn() highlight: string;

  @ViewColumn() skuSku: Sku['sku'];
  @ViewColumn() skuName: Sku['name'];
  @ViewColumn() skuId: Sku['id'];
  @ViewColumn() skuActive: Sku['active'];
}
