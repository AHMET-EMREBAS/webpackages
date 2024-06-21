import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { PurchaseOrder } from './purchase-order.entity';

@EventSubscriber()
export class PurchaseOrderSubscriber
  implements EntitySubscriberInterface<PurchaseOrder>
{
  listenTo() {
    return PurchaseOrder;
  }

  afterInsert(event: InsertEvent<PurchaseOrder>): void | Promise<any> {
    const repo = event.manager.getRepository(PurchaseOrder);
    // TODO
  }

  beforeInsert(event: InsertEvent<PurchaseOrder>): void | Promise<any> {
    const repo = event.manager.getRepository(PurchaseOrder);
    // TODO
  }
}
