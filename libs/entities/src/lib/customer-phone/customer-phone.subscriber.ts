import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { CustomerPhone } from './customer-phone.entity';

@EventSubscriber()
export class CustomerPhoneSubscriber
  implements EntitySubscriberInterface<CustomerPhone>
{
  listenTo() {
    return CustomerPhone;
  }

  afterInsert(event: InsertEvent<CustomerPhone>): void | Promise<any> {
    const repo = event.manager.getRepository(CustomerPhone);
    // TODO
  }

  beforeInsert(event: InsertEvent<CustomerPhone>): void | Promise<any> {
    const repo = event.manager.getRepository(CustomerPhone);
    // TODO
  }
}
