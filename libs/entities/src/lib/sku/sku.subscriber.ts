import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Sku } from './sku.entity';
import { Price } from '../price';
import { Quantity } from '../quantity';
import { PriceLevel } from '../price-level';
import { Store } from '../store';

@EventSubscriber()
export class SkuSubscriber implements EntitySubscriberInterface<Sku> {
  listenTo() {
    return Sku;
  }

  async afterInsert(event: InsertEvent<Sku>) {
    const price = event.manager.getRepository(Price);

    const entity = event.entity;

    const priceLevel = event.manager.getRepository(PriceLevel);
    const store = event.manager.getRepository(Store);

    const quantity = event.manager.getRepository(Quantity);
    const priceLevels = await priceLevel.find();
    const stores = await store.find();

    // Create prices
    for (const pl of priceLevels) {
      await price.save({
        price: 0,
        cost: 0,
        startDate: new Date(),
        sku: { id: entity.id },
        priceLevel: pl,
      });
    }

    // Create quantities
    for (const store of stores) {
      await quantity.save({
        quantity: 0,
        alertUnderQuantity: 5,
        alert: true,
        autoRepurchase: false,
        sku: { id: entity.id },
        store: store,
      });
    }
  }

  beforeInsert(event: InsertEvent<Sku>): void | Promise<any> {
    const repo = event.manager.getRepository(Sku);
    // TODO
  }
}
