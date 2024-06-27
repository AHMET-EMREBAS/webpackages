import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { Sku } from '../sku';

function createSkuCode(upc: string, name: string, type: 'N' | 'U' = 'N') {
  const namePart = name.slice(0, 3); //3
  const upcPart = upc.slice(upc.length - 6); // 6
  return `${type}-${namePart}-${upcPart}`; // +2
}
@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  listenTo() {
    return Product;
  }

  async afterInsert(event: InsertEvent<Product>) {
    const entity = event.entity;

    const sku = event.manager.getRepository(Sku);
    const defaultSku = await sku.save({
      ...entity,
      sku: createSkuCode(entity.upc, entity.name),
      product: entity,
    });

    const usedSKU = await sku.save({
      ...entity,
      sku: createSkuCode(entity.upc, entity.name, 'U'),
      product: entity,
    });
  }

  beforeInsert(event: InsertEvent<Product>): void | Promise<any> {
    const repo = event.manager.getRepository(Product);
    // TODO
  }
}
