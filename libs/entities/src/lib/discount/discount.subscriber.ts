import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Discount } from './discount.entity';

@EventSubscriber()
export class DiscountSubscriber implements EntitySubscriberInterface<Discount> {
  listenTo() {
    return Discount;
  }

  afterInsert(event: InsertEvent<Discount>): void | Promise<any> {
    const repo = event.manager.getRepository(Discount);
    // TODO
  }

  beforeInsert(event: InsertEvent<Discount>): void | Promise<any> {
    const repo = event.manager.getRepository(Discount);
    // TODO
  }
}
