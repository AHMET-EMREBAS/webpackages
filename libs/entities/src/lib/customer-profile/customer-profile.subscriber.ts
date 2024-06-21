import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { CustomerProfile } from './customer-profile.entity';

@EventSubscriber()
export class CustomerProfileSubscriber
  implements EntitySubscriberInterface<CustomerProfile>
{
  listenTo() {
    return CustomerProfile;
  }

  afterInsert(event: InsertEvent<CustomerProfile>): void | Promise<any> {
    const repo = event.manager.getRepository(CustomerProfile);
    // TODO
  }

  beforeInsert(event: InsertEvent<CustomerProfile>): void | Promise<any> {
    const repo = event.manager.getRepository(CustomerProfile);
    // TODO
  }
}
