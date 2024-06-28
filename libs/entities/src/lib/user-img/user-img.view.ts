import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { UserImg } from './user-img.entity';
import { UserImgMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<UserImg>(ds, UserImg, UserImgMetadata);
  },
})
export class UserImgView extends BaseView {
  @ViewColumn() title: string;
  @ViewColumn() generatedName: string;
}
