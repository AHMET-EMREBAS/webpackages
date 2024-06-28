import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { UserAddress } from './user-address.entity';
import { UserAddressMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<UserAddress>(ds, UserAddress, UserAddressMetadata);
  },
})
export class UserAddressView extends BaseView {
  @ViewColumn() street: string;
  @ViewColumn() city: string;
  @ViewColumn() state: string;
  @ViewColumn() zip: string;
}
