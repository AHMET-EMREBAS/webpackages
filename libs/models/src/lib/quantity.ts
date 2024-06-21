import { BaseEntity } from '@webpackages/types';
import { ISku } from './sku';
import { IStore } from './store';

export interface IQuantity extends BaseEntity {
  quantity: number;

  alert: boolean;

  alertUnderQuantity: number;

  autoRepurchase: boolean;

  notSellLastOne: boolean;

  sku: ISku;

  store: IStore;
}
