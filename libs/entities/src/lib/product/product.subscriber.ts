import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { PriceLevel } from '../price-level';
import { Store } from '../store';
import { Price } from '../price';
import { Quantity } from '../quantity';
import { Sku } from '../sku';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  listenTo() {
    return Product;
  }

  async afterInsert(event: InsertEvent<Product>) {
    const entity = event.entity;
    const repo = event.manager.getRepository(Product);
    const sku = event.manager.getRepository(Sku);
    const priceLevel = event.manager.getRepository(PriceLevel);
    const store = event.manager.getRepository(Store);
    const price = event.manager.getRepository(Price);
    const quantity = event.manager.getRepository(Quantity);
    const priceLevels = await priceLevel.find();
    const stores = await store.find();

    const defaultSKU = await sku.save({
      name: entity.name,
      description: entity.description,
      sku: entity.upc,
      product: { id: entity.id },
    });

    for (const pl of priceLevels) {
      await price.save({
        price: 999999999,
        cost: 99999999,
        startDate: new Date(),
        endDate: new Date('1/1/2200'),
        sku: { id: defaultSKU.id },
        priceLevel: pl,
      });
    }

    for (const store of stores) {
      await quantity.save({
        quantity: 99999999,
        alertUnderQuantity: 5,
        alert: true,
        autoRepurchase: false,
        sku: { id: defaultSKU.id },
        store: store,
      });
    }
  }

  beforeInsert(event: InsertEvent<Product>): void | Promise<any> {
    const repo = event.manager.getRepository(Product);
    // TODO
  }
}
