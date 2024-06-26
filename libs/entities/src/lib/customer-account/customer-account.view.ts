import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { CustomerAccount } from './customer-account.entity';
import { CustomerAccountMetadata } from '@webpackages/metadata';

import { Customer } from '../customer';
import { PriceLevel } from '../price-level';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<CustomerAccount>(
      ds,
      CustomerAccount,
      CustomerAccountMetadata
    );
  },
})
export class CustomerAccountView extends BaseView {
  @ViewColumn() blance: number;

  @ViewColumn() customerUsername: Customer['username'];
  @ViewColumn() customerId: Customer['id'];
  @ViewColumn() customerActive: Customer['active'];
  @ViewColumn() priceLevelName: PriceLevel['name'];
  @ViewColumn() priceLevelTaxrate: PriceLevel['taxrate'];
  @ViewColumn() priceLevelCurrency: PriceLevel['currency'];
  @ViewColumn() priceLevelId: PriceLevel['id'];
  @ViewColumn() priceLevelActive: PriceLevel['active'];
}
