import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Order } from './order.entity';

@EventSubscriber()
export class OrderSubscriber implements EntitySubscriberInterface<Order> {
  listenTo() {
    return Order;
  }

  afterInsert(event: InsertEvent<Order>): void | Promise<any> {
    const repo = event.manager.getRepository(Order);
    // TODO
  }

  beforeInsert(event: InsertEvent<Order>): void | Promise<any> {
    const repo = event.manager.getRepository(Order);
    // TODO
  }
}
