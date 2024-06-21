import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Profile } from './profile.entity';
import { ProfileMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Profile>(ds, Profile, ProfileMetadata);
  },
})
export class ProfileView extends BaseView {
  @ViewColumn() firstName: string;
  @ViewColumn() lastName: string;
  @ViewColumn() middleName: string;
}
