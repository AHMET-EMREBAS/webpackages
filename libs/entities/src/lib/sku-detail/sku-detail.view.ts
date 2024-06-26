import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { SkuDetail } from './sku-detail.entity';
import { SkuDetailMetadata } from '@webpackages/metadata';

import { Sku } from '../sku';

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

      .addSelect('main.color', 'color')
      .addSelect('main.height', 'height')
      .addSelect('main.width', 'width')
      .addSelect('main.weight', 'weight')
      .addSelect('main.manual', 'manual')
      .addSelect('main.make', 'make')
      .addSelect('main.model', 'model')
      .addSelect('main.notes', 'notes')
      .addSelect('main.website', 'website')
      .addSelect('main.manufacturer', 'manufacturer')
      .addSelect('main.highlight', 'highlight')

      .addSelect('sku.name', 'skuName')
      .addSelect('sku.sku', 'skuSku')
      .addSelect('sku.id', 'skuId')
      .addSelect('sku.active', 'skuActive')

      .from(SkuDetail, 'main')

      .leftJoin(Sku, 'sku', 'main.skuId = sku.id');
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
