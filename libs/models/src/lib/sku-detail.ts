import { BaseEntity } from '@webpackages/types';

export interface ISkuDetail extends BaseEntity {
  color: string;

  height: string;

  width: string;

  weight: string;

  manual: string;
}
