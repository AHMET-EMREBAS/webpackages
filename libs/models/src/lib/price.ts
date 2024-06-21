import { BaseEntity } from '@webpackages/types';
import { ISku } from './sku';
import { IPriceLevel } from './price-level';

export interface IPrice extends BaseEntity {
  price: number;

  cost: number;

  startDate: Date;

  endDate: Date;

  sku: ISku;

  priceLevel: IPriceLevel;
}
