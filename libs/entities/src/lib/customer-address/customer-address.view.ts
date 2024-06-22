import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { CustomerAddress } from './customer-address.entity';
import { CustomerAddressMetadata } from '@webpackages/metadata';

import { Customer } from '../customer';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<CustomerAddress>(
      ds,
      CustomerAddress,
      CustomerAddressMetadata
    );
  },
})
export class CustomerAddressView extends BaseView {
  @ViewColumn() street: string;
  @ViewColumn() city: string;
  @ViewColumn() state: string;
  @ViewColumn() zip: string;

  @ViewColumn() userUsername: Customer['username'];
  @ViewColumn() userId: Customer['id'];
  @ViewColumn() userActive: Customer['active'];
}
