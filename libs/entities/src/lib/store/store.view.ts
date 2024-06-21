import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Store } from './store.entity';
import { StoreMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Store>(ds, Store, StoreMetadata);
  },
})
export class StoreView extends BaseView {
  @ViewColumn() name: string;
}
