import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { PriceLevel } from './price-level.entity';

@EventSubscriber()
export class PriceLevelSubscriber
  implements EntitySubscriberInterface<PriceLevel>
{
  listenTo() {
    return PriceLevel;
  }

  afterInsert(event: InsertEvent<PriceLevel>): void | Promise<any> {
    const repo = event.manager.getRepository(PriceLevel);
    // TODO
  }

  beforeInsert(event: InsertEvent<PriceLevel>): void | Promise<any> {
    const repo = event.manager.getRepository(PriceLevel);
    // TODO
  }
}
