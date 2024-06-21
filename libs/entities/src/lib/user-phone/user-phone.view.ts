import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { UserPhone } from './user-phone.entity';
import { UserPhoneMetadata } from '@webpackages/metadata';

import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<UserPhone>(ds, UserPhone, UserPhoneMetadata);
  },
})
export class UserPhoneView extends BaseView {
  @ViewColumn() phone: string;

  @ViewColumn() userUsername: User['username'];
  @ViewColumn() userId: User['id'];
  @ViewColumn() userActive: User['active'];
}
