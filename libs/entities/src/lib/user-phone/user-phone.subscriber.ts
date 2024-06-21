import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { UserPhone } from './user-phone.entity';

@EventSubscriber()
export class UserPhoneSubscriber
  implements EntitySubscriberInterface<UserPhone>
{
  listenTo() {
    return UserPhone;
  }

  afterInsert(event: InsertEvent<UserPhone>): void | Promise<any> {
    const repo = event.manager.getRepository(UserPhone);
    // TODO
  }

  beforeInsert(event: InsertEvent<UserPhone>): void | Promise<any> {
    const repo = event.manager.getRepository(UserPhone);
    // TODO
  }
}
