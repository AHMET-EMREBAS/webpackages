import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { SkuDetail } from './sku-detail.entity';

@EventSubscriber()
export class SkuDetailSubscriber
  implements EntitySubscriberInterface<SkuDetail>
{
  listenTo() {
    return SkuDetail;
  }

  afterInsert(event: InsertEvent<SkuDetail>): void | Promise<any> {
    const repo = event.manager.getRepository(SkuDetail);
    // TODO
  }

  beforeInsert(event: InsertEvent<SkuDetail>): void | Promise<any> {
    const repo = event.manager.getRepository(SkuDetail);
    // TODO
  }
}
