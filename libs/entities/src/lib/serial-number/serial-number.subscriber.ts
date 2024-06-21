import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { SerialNumber } from './serial-number.entity';

@EventSubscriber()
export class SerialNumberSubscriber
  implements EntitySubscriberInterface<SerialNumber>
{
  listenTo() {
    return SerialNumber;
  }

  afterInsert(event: InsertEvent<SerialNumber>): void | Promise<any> {
    const repo = event.manager.getRepository(SerialNumber);
    // TODO
  }

  beforeInsert(event: InsertEvent<SerialNumber>): void | Promise<any> {
    const repo = event.manager.getRepository(SerialNumber);
    // TODO
  }
}
