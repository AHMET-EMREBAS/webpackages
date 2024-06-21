import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Sprint } from './sprint.entity';

@EventSubscriber()
export class SprintSubscriber implements EntitySubscriberInterface<Sprint> {
  listenTo() {
    return Sprint;
  }

  afterInsert(event: InsertEvent<Sprint>): void | Promise<any> {
    const repo = event.manager.getRepository(Sprint);
    // TODO
  }

  beforeInsert(event: InsertEvent<Sprint>): void | Promise<any> {
    const repo = event.manager.getRepository(Sprint);
    // TODO
  }
}
