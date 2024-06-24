import {BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Organization } from './organization.entity';
import { OrganizationMetadata } from '@webpackages/metadata';

import { User } from '../user'

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Organization>(ds, Organization, OrganizationMetadata);
  },
})
export class OrganizationView extends BaseView {

  @ViewColumn() name: string;
  
  @ViewColumn() managerUsername: User['username'];
@ViewColumn() managerId: User['id'];
@ViewColumn() managerActive: User['active'];
  
}
