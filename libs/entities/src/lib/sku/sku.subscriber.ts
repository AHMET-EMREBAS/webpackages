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
import { Logger } from '@nestjs/common';

@EventSubscriber()
export class SkuSubscriber implements EntitySubscriberInterface<Sku> {
  logger = new Logger('SkuSubscriber');

  listenTo() {
    return Sku;
  }

  async afterInsert(event: InsertEvent<Sku>) {
    // const price = event.manager.getRepository(Price);

    // const entity = event.entity;

    // const priceLevel = event.manager.getRepository(PriceLevel);
    // const store = event.manager.getRepository(Store);

    // const quantity = event.manager.getRepository(Quantity);
    // const priceLevels = await priceLevel.find();
    // const stores = await store.find();

    // // Create prices
    // for (const pl of priceLevels) {
    //   try {
    //     await price.save({
    //       price: 0,
    //       cost: 0,
    //       startDate: new Date(),
    //       endDate: new Date(),
    //       sku: { id: entity.id },
    //       priceLevel: pl,
    //     });
    //   } catch (err) {
    //     this.logger.error(err);
    //     this.logger.debug(pl);
    //   }
    // }

    // // Create quantities
    // for (const store of stores) {
    //   try {
    //     await quantity.save({
    //       quantity: 0,
    //       alertUnderQuantity: 5,
    //       alert: true,
    //       autoRepurchase: false,
    //       sku: { id: entity.id },
    //       store: { id: store.id },
    //     });
    //   } catch (err) {
    //     this.logger.error(err);
    //     this.logger.debug(store);
    //   }
    // }
  }

  beforeInsert(event: InsertEvent<Sku>): void | Promise<any> {
    const repo = event.manager.getRepository(Sku);
    // TODO
  }
}
