import { BaseEntity } from '@webpackages/types';
import { ISku } from './sku';

export interface ISkuDetail extends BaseEntity {
  color: string;

  height: string;

  width: string;

  weight: string;

  manual: string;

  make: string;

  model: string;

  notes: string;

  website: string;

  manufacturer: string;

  highlight: string;

  sku: ISku;
}
