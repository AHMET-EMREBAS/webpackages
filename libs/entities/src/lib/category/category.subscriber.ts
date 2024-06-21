import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Category } from './category.entity';

@EventSubscriber()
export class CategorySubscriber implements EntitySubscriberInterface<Category> {
  listenTo() {
    return Category;
  }

  afterInsert(event: InsertEvent<Category>): void | Promise<any> {
    const repo = event.manager.getRepository(Category);
    // TODO
  }

  beforeInsert(event: InsertEvent<Category>): void | Promise<any> {
    const repo = event.manager.getRepository(Category);
    // TODO
  }
}
