import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Purchase } from './purchase.entity';
import { PurchaseMetadata } from '@webpackages/metadata';

import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Purchase>(ds, Purchase, PurchaseMetadata);
  },
})
export class PurchaseView extends BaseView {
  @ViewColumn() orderDate: Date;
  @ViewColumn() expectedShippingDate: Date;
  @ViewColumn() shippingDate: Date;
  @ViewColumn() subTotal: number;
  @ViewColumn() total: number;
  @ViewColumn() notes: string;

  @ViewColumn() employeeUsername: User['username'];
  @ViewColumn() employeeId: User['id'];
  @ViewColumn() employeeActive: User['active'];
}
