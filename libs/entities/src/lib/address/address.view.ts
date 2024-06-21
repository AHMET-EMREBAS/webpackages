import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Address } from './address.entity';
import { AddressMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Address>(ds, Address, AddressMetadata);
  },
})
export class AddressView extends BaseView {
  @ViewColumn() street: string;
  @ViewColumn() city: string;
  @ViewColumn() state: string;
  @ViewColumn() zip: string;
}
