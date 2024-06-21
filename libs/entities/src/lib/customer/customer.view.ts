import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Customer } from './customer.entity';
import { CustomerMetadata } from '@webpackages/metadata';
import { AccessPolicy } from '@webpackages/types';
import { PriceLevel } from '../price-level';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Customer>(ds, Customer, CustomerMetadata);
  },
})
export class CustomerView extends BaseView {
  @ViewColumn() username: string;
  @ViewColumn() passwrod: string;
  @ViewColumn() permissions: AccessPolicy;

  @ViewColumn() priceLevelId: PriceLevel['id'];
  @ViewColumn() priceLevelActive: PriceLevel['active'];
}
