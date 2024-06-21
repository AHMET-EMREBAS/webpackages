import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Manufacturer } from './manufacturer.entity';
import { ManufacturerMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Manufacturer>(
      ds,
      Manufacturer,
      ManufacturerMetadata
    );
  },
})
export class ManufacturerView extends BaseView {
  @ViewColumn() name: string;
}
