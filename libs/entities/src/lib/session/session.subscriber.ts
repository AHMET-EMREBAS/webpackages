import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Session } from './session.entity';

@EventSubscriber()
export class SessionSubscriber implements EntitySubscriberInterface<Session> {
  listenTo() {
    return Session;
  }

  afterInsert(event: InsertEvent<Session>): void | Promise<any> {
    const repo = event.manager.getRepository(Session);
    // TODO
  }

  beforeInsert(event: InsertEvent<Session>): void | Promise<any> {
    const repo = event.manager.getRepository(Session);
    // TODO
  }
}
