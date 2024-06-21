import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { AppEvent } from './app-event.entity';
import { AppEventMetadata } from '@webpackages/metadata';
import { EventPayload } from '@webpackages/types';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<AppEvent>(ds, AppEvent, AppEventMetadata);
  },
})
export class AppEventView extends BaseView {
  @ViewColumn() name: string;
  @ViewColumn() payload: EventPayload;
}
