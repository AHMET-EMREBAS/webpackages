import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Clock } from './clock.entity';

@EventSubscriber()
export class ClockSubscriber implements EntitySubscriberInterface<Clock> {
  listenTo() {
    return Clock;
  }

  afterInsert(event: InsertEvent<Clock>): void | Promise<any> {
    const repo = event.manager.getRepository(Clock);
    // TODO
  }

  beforeInsert(event: InsertEvent<Clock>): void | Promise<any> {
    const repo = event.manager.getRepository(Clock);
    // TODO
  }
}
