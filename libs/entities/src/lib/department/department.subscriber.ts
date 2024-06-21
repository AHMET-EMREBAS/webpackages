import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Department } from './department.entity';

@EventSubscriber()
export class DepartmentSubscriber
  implements EntitySubscriberInterface<Department>
{
  listenTo() {
    return Department;
  }

  afterInsert(event: InsertEvent<Department>): void | Promise<any> {
    const repo = event.manager.getRepository(Department);
    // TODO
  }

  beforeInsert(event: InsertEvent<Department>): void | Promise<any> {
    const repo = event.manager.getRepository(Department);
    // TODO
  }
}
