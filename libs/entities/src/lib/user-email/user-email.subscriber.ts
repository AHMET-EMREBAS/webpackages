import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { UserEmail } from './user-email.entity';

@EventSubscriber()
export class UserEmailSubscriber
  implements EntitySubscriberInterface<UserEmail>
{
  listenTo() {
    return UserEmail;
  }

  afterInsert(event: InsertEvent<UserEmail>): void | Promise<any> {
    const repo = event.manager.getRepository(UserEmail);
    // TODO
  }

  beforeInsert(event: InsertEvent<UserEmail>): void | Promise<any> {
    const repo = event.manager.getRepository(UserEmail);
    // TODO
  }
}
