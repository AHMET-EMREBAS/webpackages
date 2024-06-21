import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { SerialNumber } from './serial-number.entity';
import { SerialNumberMetadata } from '@webpackages/metadata';

import { Sku } from '../sku';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<SerialNumber>(
      ds,
      SerialNumber,
      SerialNumberMetadata
    );
  },
})
export class SerialNumberView extends BaseView {
  @ViewColumn() serialNumber: string;
  @ViewColumn() inStock: boolean;
  @ViewColumn() generated: boolean;

  @ViewColumn() skuId: Sku['id'];
  @ViewColumn() skuActive: Sku['active'];
}
