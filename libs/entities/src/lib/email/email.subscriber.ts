import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Email } from './email.entity';

@EventSubscriber()
export class EmailSubscriber implements EntitySubscriberInterface<Email> {
  listenTo() {
    return Email;
  }

  afterInsert(event: InsertEvent<Email>): void | Promise<any> {
    const repo = event.manager.getRepository(Email);
    // TODO
  }

  beforeInsert(event: InsertEvent<Email>): void | Promise<any> {
    const repo = event.manager.getRepository(Email);
    // TODO
  }
}
