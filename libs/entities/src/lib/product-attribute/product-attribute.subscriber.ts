import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Logger } from '@nestjs/common';
import { ProductAttribute } from './product-attribute.entity';
import { Product } from '../product/product.entity';

@EventSubscriber()
export class ProductAttributeSubscriber
  implements EntitySubscriberInterface<Product>
{
  protected logger = new Logger('ProductAttributeSubscriber');
  
  listenTo() {
    return ProductAttribute;
  }

  async afterInsert(event: InsertEvent<Product>) {
    // TODO
  }

  beforeInsert(event: InsertEvent<Product>): void | Promise<any> {
    // TODO
  }
}
