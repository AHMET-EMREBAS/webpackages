import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Email } from './email.entity';
import { EmailMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Email>(ds, Email, EmailMetadata);
  },
})
export class EmailView extends BaseView {
  @ViewColumn() email: string;
}
