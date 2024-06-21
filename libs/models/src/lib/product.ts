import { BaseEntity } from '@webpackages/types';
import { ICategory } from './category';
import { ISupplier } from './supplier';

export interface IProduct extends BaseEntity {
  name: string;

  description: string;

  upc: string;

  category: ICategory;

  supplier: ISupplier;
}
