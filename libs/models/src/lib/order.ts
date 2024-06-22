import { BaseEntity } from '@webpackages/types';
import { ISku } from './sku';
import { ICart } from './cart';
import { IDiscount } from './discount';

export interface IOrder extends BaseEntity {
  unitPrice: number;

  subTotal: number;

  quantity: number;

  sku: ISku;

  cart: ICart;

  discounts: IDiscount;
}
