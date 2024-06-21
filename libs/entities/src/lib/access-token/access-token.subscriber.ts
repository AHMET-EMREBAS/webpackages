import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { AccessToken } from './access-token.entity';

@EventSubscriber()
export class AccessTokenSubscriber
  implements EntitySubscriberInterface<AccessToken>
{
  listenTo() {
    return AccessToken;
  }

  afterInsert(event: InsertEvent<AccessToken>): void | Promise<any> {
    const repo = event.manager.getRepository(AccessToken);
    // TODO
  }

  beforeInsert(event: InsertEvent<AccessToken>): void | Promise<any> {
    const repo = event.manager.getRepository(AccessToken);
    // TODO
  }
}
