import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { Sku } from '../sku';
import { Logger } from '@nestjs/common';

function createSkuCode(upc: string, name: string, type: 'N' | 'U' = 'N') {
  const namePart = name.slice(0, 3); //3
  const upcPart = upc.slice(upc.length - 6); // 6
  return `${type}-${namePart}-${upcPart}`; // +2
}

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  protected logger = new Logger('ProductSubscriber');
  listenTo() {
    return Product;
  }

  async afterInsert(event: InsertEvent<Product>) {
    const { id: productId, ...entity } = event.entity;

    const sku = event.manager.getRepository<Sku>(Sku);

    try {
      const defaultOne = await sku.save({
        ...entity,
        name: `${entity.name}`,
        description: `${entity.description}`,
        sku: entity.upc,
        product: { id: productId },
      });
      console.table(defaultOne);
    } catch (err) {
      this.logger.error(err);
      this.logger.debug(sku);
    }
  }

  beforeInsert(event: InsertEvent<Product>): void | Promise<any> {
    const repo = event.manager.getRepository(Product);
    // TODO
  }
}
