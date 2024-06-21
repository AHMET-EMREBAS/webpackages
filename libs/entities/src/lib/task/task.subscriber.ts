import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Task } from './task.entity';

@EventSubscriber()
export class TaskSubscriber implements EntitySubscriberInterface<Task> {
  listenTo() {
    return Task;
  }

  afterInsert(event: InsertEvent<Task>): void | Promise<any> {
    const repo = event.manager.getRepository(Task);
    // TODO
  }

  beforeInsert(event: InsertEvent<Task>): void | Promise<any> {
    const repo = event.manager.getRepository(Task);
    // TODO
  }
}
