import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { UserEmail } from './user-email.entity';
import { UserEmailMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<UserEmail>(ds, UserEmail, UserEmailMetadata);
  },
})
export class UserEmailView extends BaseView {
  @ViewColumn() email: string;
}
