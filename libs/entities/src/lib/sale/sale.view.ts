import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Sale } from './sale.entity';
import { SaleMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Sale>(ds, Sale, SaleMetadata);
  },
})
export class SaleView extends BaseView {
  @ViewColumn() subTotal: number;
  @ViewColumn() total: number;
  @ViewColumn() creditCardPayment: number;
  @ViewColumn() cashPayment: number;
  @ViewColumn() balancePayment: number;
  @ViewColumn() customerId: number;
  @ViewColumn() employeeId: number;
}
