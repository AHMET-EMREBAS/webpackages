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

  @ViewColumn() userUsername: Customer['username'];
  @ViewColumn() userId: Customer['id'];
  @ViewColumn() userActive: Customer['active'];
}
