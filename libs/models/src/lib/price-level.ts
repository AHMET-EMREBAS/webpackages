import { BaseEntity } from '@webpackages/types';

export interface IPriceLevel extends BaseEntity {
  name: string;

  taxrate: number;
}
