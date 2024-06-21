import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Inbox } from './inbox.entity';

@EventSubscriber()
export class InboxSubscriber implements EntitySubscriberInterface<Inbox> {
  listenTo() {
    return Inbox;
  }

  afterInsert(event: InsertEvent<Inbox>): void | Promise<any> {
    const repo = event.manager.getRepository(Inbox);
    // TODO
  }

  beforeInsert(event: InsertEvent<Inbox>): void | Promise<any> {
    const repo = event.manager.getRepository(Inbox);
    // TODO
  }
}
