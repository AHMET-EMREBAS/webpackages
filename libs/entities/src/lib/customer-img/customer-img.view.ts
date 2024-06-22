import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { CustomerImg } from './customer-img.entity';
import { CustomerImgMetadata } from '@webpackages/metadata';

import { Customer } from '../customer';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<CustomerImg>(ds, CustomerImg, CustomerImgMetadata);
  },
})
export class CustomerImgView extends BaseView {
  @ViewColumn() title: string;
  @ViewColumn() generatedName: string;

  @ViewColumn() customerUsername: Customer['username'];
  @ViewColumn() customerId: Customer['id'];
  @ViewColumn() customerActive: Customer['active'];
}
