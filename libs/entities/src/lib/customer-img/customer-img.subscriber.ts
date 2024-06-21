import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { CustomerImg } from './customer-img.entity';

@EventSubscriber()
export class CustomerImgSubscriber
  implements EntitySubscriberInterface<CustomerImg>
{
  listenTo() {
    return CustomerImg;
  }

  afterInsert(event: InsertEvent<CustomerImg>): void | Promise<any> {
    const repo = event.manager.getRepository(CustomerImg);
    // TODO
  }

  beforeInsert(event: InsertEvent<CustomerImg>): void | Promise<any> {
    const repo = event.manager.getRepository(CustomerImg);
    // TODO
  }
}
