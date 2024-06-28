import { BaseEntity } from '@webpackages/types';
import { IProduct } from './product';

export interface ISku extends BaseEntity {
  name: string;

  sku: string;

  description: string;

  product: IProduct;
}
