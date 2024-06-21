import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { User } from './user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }

  afterInsert(event: InsertEvent<User>): void | Promise<any> {
    const repo = event.manager.getRepository(User);
    // TODO
  }

  beforeInsert(event: InsertEvent<User>): void | Promise<any> {
    const repo = event.manager.getRepository(User);
    // TODO
  }
}
