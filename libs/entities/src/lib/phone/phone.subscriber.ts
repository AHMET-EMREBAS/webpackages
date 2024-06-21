import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Phone } from './phone.entity';

@EventSubscriber()
export class PhoneSubscriber implements EntitySubscriberInterface<Phone> {
  listenTo() {
    return Phone;
  }

  afterInsert(event: InsertEvent<Phone>): void | Promise<any> {
    const repo = event.manager.getRepository(Phone);
    // TODO
  }

  beforeInsert(event: InsertEvent<Phone>): void | Promise<any> {
    const repo = event.manager.getRepository(Phone);
    // TODO
  }
}
