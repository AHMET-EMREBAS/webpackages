import { BaseEntity } from '@webpackages/types';
import { IPurchase } from './purchase';
import { ISku } from './sku';

export interface IPurchaseOrder extends BaseEntity {
  price: number;

  quantity: number;

  subTotal: number;

  total: number;

  purchase: IPurchase;

  sku: ISku;
}
