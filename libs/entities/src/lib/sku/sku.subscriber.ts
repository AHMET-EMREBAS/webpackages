import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Sku } from './sku.entity';

@EventSubscriber()
export class SkuSubscriber implements EntitySubscriberInterface<Sku> {
  listenTo() {
    return Sku;
  }

  afterInsert(event: InsertEvent<Sku>): void | Promise<any> {
    const repo = event.manager.getRepository(Sku);
    // TODO
  }

  beforeInsert(event: InsertEvent<Sku>): void | Promise<any> {
    const repo = event.manager.getRepository(Sku);
    // TODO
  }
}
