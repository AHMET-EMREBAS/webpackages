import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Cart } from './cart.entity';
import { CartMetadata } from '@webpackages/metadata';

import { Customer } from '../customer';
import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Cart>(ds, Cart, CartMetadata);
  },
})
export class CartView extends BaseView {
  @ViewColumn() complete: boolean;

  @ViewColumn() customerId: Customer['id'];
  @ViewColumn() customerActive: Customer['active'];
  @ViewColumn() userId: User['id'];
  @ViewColumn() userActive: User['active'];
}
