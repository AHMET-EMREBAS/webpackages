import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Manufacturer } from './manufacturer.entity';

@EventSubscriber()
export class ManufacturerSubscriber
  implements EntitySubscriberInterface<Manufacturer>
{
  listenTo() {
    return Manufacturer;
  }

  afterInsert(event: InsertEvent<Manufacturer>): void | Promise<any> {
    const repo = event.manager.getRepository(Manufacturer);
    // TODO
  }

  beforeInsert(event: InsertEvent<Manufacturer>): void | Promise<any> {
    const repo = event.manager.getRepository(Manufacturer);
    // TODO
  }
}
