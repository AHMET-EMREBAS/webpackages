import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Price } from './price.entity';

@EventSubscriber()
export class PriceSubscriber implements EntitySubscriberInterface<Price> {
  listenTo() {
    return Price;
  }

  afterInsert(event: InsertEvent<Price>): void | Promise<any> {
    const repo = event.manager.getRepository(Price);
    // TODO
  }

  beforeInsert(event: InsertEvent<Price>): void | Promise<any> {
    const repo = event.manager.getRepository(Price);
    // TODO
  }
}
