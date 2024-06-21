import { BaseEntity } from '@webpackages/types';
import { IProduct } from './product';

export interface IProductImg extends BaseEntity {
  title: string;

  generatedName: string;

  product: IProduct;
}
