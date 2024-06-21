import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { ProductImg } from './product-img.entity';

@EventSubscriber()
export class ProductImgSubscriber
  implements EntitySubscriberInterface<ProductImg>
{
  listenTo() {
    return ProductImg;
  }

  afterInsert(event: InsertEvent<ProductImg>): void | Promise<any> {
    const repo = event.manager.getRepository(ProductImg);
    // TODO
  }

  beforeInsert(event: InsertEvent<ProductImg>): void | Promise<any> {
    const repo = event.manager.getRepository(ProductImg);
    // TODO
  }
}
