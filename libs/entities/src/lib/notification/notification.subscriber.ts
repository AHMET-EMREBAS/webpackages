import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Notification } from './notification.entity';

@EventSubscriber()
export class NotificationSubscriber
  implements EntitySubscriberInterface<Notification>
{
  listenTo() {
    return Notification;
  }

  afterInsert(event: InsertEvent<Notification>): void | Promise<any> {
    const repo = event.manager.getRepository(Notification);
    // TODO
  }

  beforeInsert(event: InsertEvent<Notification>): void | Promise<any> {
    const repo = event.manager.getRepository(Notification);
    // TODO
  }
}
