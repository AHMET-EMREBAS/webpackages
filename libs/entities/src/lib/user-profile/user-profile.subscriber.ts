import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { UserProfile } from './user-profile.entity';

@EventSubscriber()
export class UserProfileSubscriber
  implements EntitySubscriberInterface<UserProfile>
{
  listenTo() {
    return UserProfile;
  }

  afterInsert(event: InsertEvent<UserProfile>): void | Promise<any> {
    const repo = event.manager.getRepository(UserProfile);
    // TODO
  }

  beforeInsert(event: InsertEvent<UserProfile>): void | Promise<any> {
    const repo = event.manager.getRepository(UserProfile);
    // TODO
  }
}
