import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { User } from './user.entity';
import { UserMetadata } from '@webpackages/metadata';
import { AccessPolicy } from '@webpackages/types';
import { Department } from '../department';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<User>(ds, User, UserMetadata);
  },
})
export class UserView extends BaseView {
  @ViewColumn() username: string;
  @ViewColumn() password: string;
  @ViewColumn() permissions: AccessPolicy;

  @ViewColumn() departmentId: Department['id'];
  @ViewColumn() departmentActive: Department['active'];
}
