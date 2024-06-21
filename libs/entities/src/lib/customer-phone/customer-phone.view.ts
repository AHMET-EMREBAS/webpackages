import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { CustomerPhone } from './customer-phone.entity';
import { CustomerPhoneMetadata } from '@webpackages/metadata';

import { Customer } from '../customer';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<CustomerPhone>(
      ds,
      CustomerPhone,
      CustomerPhoneMetadata
    );
  },
})
export class CustomerPhoneView extends BaseView {
  @ViewColumn() phone: string;

  @ViewColumn() customerId: Customer['id'];
  @ViewColumn() customerActive: Customer['active'];
}
