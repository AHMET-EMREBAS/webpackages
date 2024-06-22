import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { CustomerEmail } from './customer-email.entity';
import { CustomerEmailMetadata } from '@webpackages/metadata';

import { Customer } from '../customer';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<CustomerEmail>(
      ds,
      CustomerEmail,
      CustomerEmailMetadata
    );
  },
})
export class CustomerEmailView extends BaseView {
  @ViewColumn() email: string;

  @ViewColumn() customerUsername: Customer['username'];
  @ViewColumn() customerId: Customer['id'];
  @ViewColumn() customerActive: Customer['active'];
}
