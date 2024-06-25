import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { Sku } from '../sku';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  listenTo() {
    return Product;
  }

  async afterInsert(event: InsertEvent<Product>) {
    const entity = event.entity;

    const sku = event.manager.getRepository(Sku);
    const savedSku = await sku.save({
      ...entity,
      sku: entity.upc,
      product: entity,
    });
  }

  beforeInsert(event: InsertEvent<Product>): void | Promise<any> {
    const repo = event.manager.getRepository(Product);
    // TODO
  }
}
