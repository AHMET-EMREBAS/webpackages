import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Profile } from './profile.entity';

@EventSubscriber()
export class ProfileSubscriber implements EntitySubscriberInterface<Profile> {
  listenTo() {
    return Profile;
  }

  afterInsert(event: InsertEvent<Profile>): void | Promise<any> {
    const repo = event.manager.getRepository(Profile);
    // TODO
  }

  beforeInsert(event: InsertEvent<Profile>): void | Promise<any> {
    const repo = event.manager.getRepository(Profile);
    // TODO
  }
}
