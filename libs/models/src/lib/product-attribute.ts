import { BaseEntity } from '@webpackages/types';
import { IProduct } from './product';

export interface IProductAttribute extends BaseEntity {
  key: string;

  value: string;

  product: IProduct;
}
