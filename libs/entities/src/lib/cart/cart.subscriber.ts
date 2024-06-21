import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Cart } from './cart.entity';

@EventSubscriber()
export class CartSubscriber implements EntitySubscriberInterface<Cart> {
  listenTo() {
    return Cart;
  }

  afterInsert(event: InsertEvent<Cart>): void | Promise<any> {
    const repo = event.manager.getRepository(Cart);
    // TODO
  }

  beforeInsert(event: InsertEvent<Cart>): void | Promise<any> {
    const repo = event.manager.getRepository(Cart);
    // TODO
  }
}
