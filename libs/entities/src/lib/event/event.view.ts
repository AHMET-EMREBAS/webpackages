import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Event } from './event.entity';
import { EventMetadata } from '@webpackages/metadata';
import { EventPayload } from '@webpackages/types';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Event>(ds, Event, EventMetadata);
  },
})
export class EventView extends BaseView {
  @ViewColumn() name: string;
  @ViewColumn() payload: EventPayload;
}
