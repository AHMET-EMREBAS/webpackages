import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { CustomerAddress } from './customer-address.entity';

@EventSubscriber()
export class CustomerAddressSubscriber
  implements EntitySubscriberInterface<CustomerAddress>
{
  listenTo() {
    return CustomerAddress;
  }

  afterInsert(event: InsertEvent<CustomerAddress>): void | Promise<any> {
    const repo = event.manager.getRepository(CustomerAddress);
    // TODO
  }

  beforeInsert(event: InsertEvent<CustomerAddress>): void | Promise<any> {
    const repo = event.manager.getRepository(CustomerAddress);
    // TODO
  }
}
