import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Address } from './address.entity';

@EventSubscriber()
export class AddressSubscriber implements EntitySubscriberInterface<Address> {
  listenTo() {
    return Address;
  }

  afterInsert(event: InsertEvent<Address>): void | Promise<any> {
    const repo = event.manager.getRepository(Address);
    // TODO
  }

  beforeInsert(event: InsertEvent<Address>): void | Promise<any> {
    const repo = event.manager.getRepository(Address);
    // TODO
  }
}
