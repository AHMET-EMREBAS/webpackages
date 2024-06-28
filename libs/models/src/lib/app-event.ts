import { BaseEntity } from '@webpackages/types';
import { EventPayload } from '@webpackages/types';

export interface IAppEvent extends BaseEntity {
  name: string;

  payload: EventPayload;
}
