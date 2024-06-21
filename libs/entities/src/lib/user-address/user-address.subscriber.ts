import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { UserAddress } from './user-address.entity';

@EventSubscriber()
export class UserAddressSubscriber
  implements EntitySubscriberInterface<UserAddress>
{
  listenTo() {
    return UserAddress;
  }

  afterInsert(event: InsertEvent<UserAddress>): void | Promise<any> {
    const repo = event.manager.getRepository(UserAddress);
    // TODO
  }

  beforeInsert(event: InsertEvent<UserAddress>): void | Promise<any> {
    const repo = event.manager.getRepository(UserAddress);
    // TODO
  }
}
