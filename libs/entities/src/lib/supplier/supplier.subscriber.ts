import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Supplier } from './supplier.entity';

@EventSubscriber()
export class SupplierSubscriber implements EntitySubscriberInterface<Supplier> {
  listenTo() {
    return Supplier;
  }

  afterInsert(event: InsertEvent<Supplier>): void | Promise<any> {
    const repo = event.manager.getRepository(Supplier);
    // TODO
  }

  beforeInsert(event: InsertEvent<Supplier>): void | Promise<any> {
    const repo = event.manager.getRepository(Supplier);
    // TODO
  }
}
