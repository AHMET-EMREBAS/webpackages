import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Store } from './store.entity';

@EventSubscriber()
export class StoreSubscriber implements EntitySubscriberInterface<Store> {
  listenTo() {
    return Store;
  }

  afterInsert(event: InsertEvent<Store>): void | Promise<any> {
    const repo = event.manager.getRepository(Store);
    // TODO
  }

  beforeInsert(event: InsertEvent<Store>): void | Promise<any> {
    const repo = event.manager.getRepository(Store);
    // TODO
  }
}
