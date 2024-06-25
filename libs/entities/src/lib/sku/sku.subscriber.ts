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
    const entity = event.entity;

    const priceLevel = event.manager.getRepository(PriceLevel);
    const store = event.manager.getRepository(Store);

    const price = event.manager.getRepository(Price);
    const quantity = event.manager.getRepository(Quantity);
    const priceLevels = await priceLevel.find();
    const stores = await store.find();

    // Create prices
    for (const pl of priceLevels) {
      await price.save({
        price: 999999999,
        cost: 99999999,
        startDate: new Date(),
        endDate: new Date('1/1/2200'),
        sku: entity,
        priceLevel: pl,
      });
    }

    // Create quantities
    for (const store of stores) {
      await quantity.save({
        quantity: 99999999,
        alertUnderQuantity: 5,
        alert: true,
        autoRepurchase: false,
        sku: entity,
        store: store,
      });
    }
  }

  beforeInsert(event: InsertEvent<Sku>): void | Promise<any> {
    const repo = event.manager.getRepository(Sku);
    // TODO
  }
}
