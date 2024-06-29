import {BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { SerialNumber } from './serial-number.entity';
import { SerialNumberMetadata } from '@webpackages/metadata';

import { Product } from '../product'

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<SerialNumber>(ds, SerialNumber, SerialNumberMetadata);
  },
})
export class SerialNumberView extends BaseView {

  @ViewColumn() required: boolean;
@ViewColumn() type: string;
@ViewColumn() prefix: string;
@ViewColumn() suffix: string;
@ViewColumn() serialNumber: string;
  
  @ViewColumn() productName: Product['name'];
@ViewColumn() productUpc: Product['upc'];
@ViewColumn() productId: Product['id'];
@ViewColumn() productActive: Product['active'];
  
}
