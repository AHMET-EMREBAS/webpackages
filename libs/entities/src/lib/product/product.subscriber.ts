import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  listenTo() {
    return Product;
  }

  afterInsert(event: InsertEvent<Product>): void | Promise<any> {
    const repo = event.manager.getRepository(Product);
    // TODO
  }

  beforeInsert(event: InsertEvent<Product>): void | Promise<any> {
    const repo = event.manager.getRepository(Product);
    // TODO
  }
}
