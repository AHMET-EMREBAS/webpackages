import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { AppEvent } from './app-event.entity';

@EventSubscriber()
export class AppEventSubscriber implements EntitySubscriberInterface<AppEvent> {
  listenTo() {
    return AppEvent;
  }

  afterInsert(event: InsertEvent<AppEvent>): void | Promise<any> {
    const repo = event.manager.getRepository(AppEvent);
    // TODO
  }

  beforeInsert(event: InsertEvent<AppEvent>): void | Promise<any> {
    const repo = event.manager.getRepository(AppEvent);
    // TODO
  }
}
