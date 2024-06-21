import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Phone } from './phone.entity';
import { PhoneMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Phone>(ds, Phone, PhoneMetadata);
  },
})
export class PhoneView extends BaseView {
  @ViewColumn() phone: string;
}
