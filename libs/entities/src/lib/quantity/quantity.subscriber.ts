import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Quantity } from './quantity.entity';

@EventSubscriber()
export class QuantitySubscriber implements EntitySubscriberInterface<Quantity> {
  listenTo() {
    return Quantity;
  }

  afterInsert(event: InsertEvent<Quantity>): void | Promise<any> {
    const repo = event.manager.getRepository(Quantity);
    // TODO
  }

  beforeInsert(event: InsertEvent<Quantity>): void | Promise<any> {
    const repo = event.manager.getRepository(Quantity);
    // TODO
  }
}
