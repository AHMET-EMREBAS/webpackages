import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { PriceLevel } from './price-level.entity';
import { PriceLevelMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<PriceLevel>(ds, PriceLevel, PriceLevelMetadata);
  },
})
export class PriceLevelView extends BaseView {
  @ViewColumn() name: string;
  @ViewColumn() currency: string;
  @ViewColumn() taxrate: number;
}
