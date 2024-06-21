import { BaseEntity } from '@webpackages/types';

export interface IEvent extends BaseEntity {
  name: string;

  payload: object;
}
