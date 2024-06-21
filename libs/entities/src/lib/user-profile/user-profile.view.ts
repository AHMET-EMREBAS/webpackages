import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { UserProfile } from './user-profile.entity';
import { UserProfileMetadata } from '@webpackages/metadata';

import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<UserProfile>(ds, UserProfile, UserProfileMetadata);
  },
})
export class UserProfileView extends BaseView {
  @ViewColumn() firstName: string;
  @ViewColumn() lastName: string;
  @ViewColumn() middleName: string;

  @ViewColumn() userUsername: User['username'];
  @ViewColumn() userId: User['id'];
  @ViewColumn() userActive: User['active'];
}
