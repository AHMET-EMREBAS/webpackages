import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Store } from './store.entity';
import { StoreMetadata } from '@webpackages/metadata';

import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Store>(ds, Store, StoreMetadata);
  },
})
export class StoreView extends BaseView {
  @ViewColumn() name: string;

  @ViewColumn() managerUsername: User['username'];
  @ViewColumn() managerId: User['id'];
  @ViewColumn() managerActive: User['active'];
}
