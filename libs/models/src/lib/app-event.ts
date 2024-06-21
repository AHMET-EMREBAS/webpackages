import { BaseEntity } from '@webpackages/types';

export interface IAppEvent extends BaseEntity {
  name: string;

  payload: object;
}
