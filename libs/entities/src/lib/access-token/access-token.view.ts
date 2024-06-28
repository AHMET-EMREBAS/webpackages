import {BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { AccessToken } from './access-token.entity';
import { AccessTokenMetadata } from '@webpackages/metadata';
import {AccessPolicy} from '@webpackages/types';


@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<AccessToken>(ds, AccessToken, AccessTokenMetadata);
  },
})
export class AccessTokenView extends BaseView {

  @ViewColumn() name: string;
@ViewColumn() token: string;
@ViewColumn() permissions: AccessPolicy;
  
  
  
}
