import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Customer } from './customer.entity';

@EventSubscriber()
export class CustomerSubscriber implements EntitySubscriberInterface<Customer> {
  listenTo() {
    return Customer;
  }

  afterInsert(event: InsertEvent<Customer>): void | Promise<any> {
    const repo = event.manager.getRepository(Customer);
    // TODO
  }

  beforeInsert(event: InsertEvent<Customer>): void | Promise<any> {
    const repo = event.manager.getRepository(Customer);
    // TODO
  }
}
