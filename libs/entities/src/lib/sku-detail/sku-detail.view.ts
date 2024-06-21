import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { SkuDetail } from './sku-detail.entity';
import { SkuDetailMetadata } from '@webpackages/metadata';

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
}
