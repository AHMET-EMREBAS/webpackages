import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { CustomerAccount } from './customer-account.entity';

@EventSubscriber()
export class CustomerAccountSubscriber
  implements EntitySubscriberInterface<CustomerAccount>
{
  listenTo() {
    return CustomerAccount;
  }

  afterInsert(event: InsertEvent<CustomerAccount>): void | Promise<any> {
    const repo = event.manager.getRepository(CustomerAccount);
    // TODO
  }

  beforeInsert(event: InsertEvent<CustomerAccount>): void | Promise<any> {
    const repo = event.manager.getRepository(CustomerAccount);
    // TODO
  }
}
