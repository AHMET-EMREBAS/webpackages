import { BaseEntity } from '@webpackages/types';
import { ISku } from './sku';

export interface IDiscount extends BaseEntity {
  fixedDiscount: number;

  percentDiscount: number;

  startDate: Date;

  endDate: Date;

  sku: ISku;
}
