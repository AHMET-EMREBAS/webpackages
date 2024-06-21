import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { CustomerEmail } from './customer-email.entity';

@EventSubscriber()
export class CustomerEmailSubscriber
  implements EntitySubscriberInterface<CustomerEmail>
{
  listenTo() {
    return CustomerEmail;
  }

  afterInsert(event: InsertEvent<CustomerEmail>): void | Promise<any> {
    const repo = event.manager.getRepository(CustomerEmail);
    // TODO
  }

  beforeInsert(event: InsertEvent<CustomerEmail>): void | Promise<any> {
    const repo = event.manager.getRepository(CustomerEmail);
    // TODO
  }
}
