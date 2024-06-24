import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Organization } from './organization.entity';

@EventSubscriber()
export class OrganizationSubscriber implements EntitySubscriberInterface<Organization> {
  listenTo() {
    return Organization;
  }

  afterInsert(event: InsertEvent<Organization>): void | Promise<any> {
    const repo = event.manager.getRepository(Organization);
    // TODO
  }

  beforeInsert(event: InsertEvent<Organization>): void | Promise<any> {
    const repo = event.manager.getRepository(Organization);
    // TODO
  }
}
