import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { UserImg } from './user-img.entity';

@EventSubscriber()
export class UserImgSubscriber implements EntitySubscriberInterface<UserImg> {
  listenTo() {
    return UserImg;
  }

  afterInsert(event: InsertEvent<UserImg>): void | Promise<any> {
    const repo = event.manager.getRepository(UserImg);
    // TODO
  }

  beforeInsert(event: InsertEvent<UserImg>): void | Promise<any> {
    const repo = event.manager.getRepository(UserImg);
    // TODO
  }
}
