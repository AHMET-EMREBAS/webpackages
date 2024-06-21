import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Purchase } from './purchase.entity';

@EventSubscriber()
export class PurchaseSubscriber implements EntitySubscriberInterface<Purchase> {
  listenTo() {
    return Purchase;
  }

  afterInsert(event: InsertEvent<Purchase>): void | Promise<any> {
    const repo = event.manager.getRepository(Purchase);
    // TODO
  }

  beforeInsert(event: InsertEvent<Purchase>): void | Promise<any> {
    const repo = event.manager.getRepository(Purchase);
    // TODO
  }
}
