import { BaseEntity } from '@webpackages/types';
import { ISku } from './sku';
import { IPriceLevel } from './price-level';

export interface IDiscount extends BaseEntity {
  fixedDiscount: number;

  percentDiscount: number;

  startDate: Date;

  endDate: Date;

  sku: ISku;

  priceLevel: IPriceLevel;
}
