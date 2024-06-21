import { BaseEntity } from '@webpackages/types';
import { IProduct } from './product';

export interface ISku extends BaseEntity {
  name: string;

  description: string;

  sku: string;

  product: IProduct;
}
