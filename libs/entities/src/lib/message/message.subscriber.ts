import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Message } from './message.entity';

@EventSubscriber()
export class MessageSubscriber implements EntitySubscriberInterface<Message> {
  listenTo() {
    return Message;
  }

  afterInsert(event: InsertEvent<Message>): void | Promise<any> {
    const repo = event.manager.getRepository(Message);
    // TODO
  }

  beforeInsert(event: InsertEvent<Message>): void | Promise<any> {
    const repo = event.manager.getRepository(Message);
    // TODO
  }
}
