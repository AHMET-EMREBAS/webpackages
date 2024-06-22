import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Sale } from './sale.entity';

@EventSubscriber()
export class SaleSubscriber implements EntitySubscriberInterface<Sale> {
  listenTo() {
    return Sale;
  }

  afterInsert(event: InsertEvent<Sale>): void | Promise<any> {
    const repo = event.manager.getRepository(Sale);
    // TODO
  }

  beforeInsert(event: InsertEvent<Sale>): void | Promise<any> {
    const repo = event.manager.getRepository(Sale);
    // TODO
  }
}
