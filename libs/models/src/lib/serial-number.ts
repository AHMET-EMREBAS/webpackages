import { BaseEntity } from '@webpackages/types';
import { ISku } from './sku';

export interface ISerialNumber extends BaseEntity {
  serialNumber: string;

  inStock: boolean;

  generated: boolean;

  sku: ISku;
}
