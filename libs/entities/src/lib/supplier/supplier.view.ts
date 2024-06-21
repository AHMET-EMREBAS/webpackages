import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Supplier } from './supplier.entity';
import { SupplierMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Supplier>(ds, Supplier, SupplierMetadata);
  },
})
export class SupplierView extends BaseView {
  @ViewColumn() name: string;
}
