import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Project } from './project.entity';

@EventSubscriber()
export class ProjectSubscriber implements EntitySubscriberInterface<Project> {
  listenTo() {
    return Project;
  }

  afterInsert(event: InsertEvent<Project>): void | Promise<any> {
    const repo = event.manager.getRepository(Project);
    // TODO
  }

  beforeInsert(event: InsertEvent<Project>): void | Promise<any> {
    const repo = event.manager.getRepository(Project);
    // TODO
  }
}
