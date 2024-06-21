import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Event } from './event.entity';

@EventSubscriber()
export class EventSubscriber implements EntitySubscriberInterface<Event> {
  listenTo() {
    return Event;
  }

  afterInsert(event: InsertEvent<Event>): void | Promise<any> {
    const repo = event.manager.getRepository(Event);
    // TODO
  }

  beforeInsert(event: InsertEvent<Event>): void | Promise<any> {
    const repo = event.manager.getRepository(Event);
    // TODO
  }
}
