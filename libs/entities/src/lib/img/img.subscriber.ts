import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Img } from './img.entity';

@EventSubscriber()
export class ImgSubscriber implements EntitySubscriberInterface<Img> {
  listenTo() {
    return Img;
  }

  afterInsert(event: InsertEvent<Img>): void | Promise<any> {
    const repo = event.manager.getRepository(Img);
    // TODO
  }

  beforeInsert(event: InsertEvent<Img>): void | Promise<any> {
    const repo = event.manager.getRepository(Img);
    // TODO
  }
}
