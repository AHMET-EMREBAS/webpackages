import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { CustomerProfile } from './customer-profile.entity';
import { CustomerProfileMetadata } from '@webpackages/metadata';

import { Customer } from '../customer';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<CustomerProfile>(
      ds,
      CustomerProfile,
      CustomerProfileMetadata
    );
  },
})
export class CustomerProfileView extends BaseView {
  @ViewColumn() firstName: string;
  @ViewColumn() lastName: string;
  @ViewColumn() middleName: string;

  @ViewColumn() userUsername: Customer['username'];
  @ViewColumn() userId: Customer['id'];
  @ViewColumn() userActive: Customer['active'];
}
