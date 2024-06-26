import { Logger, Module } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import {
  Category,
  PriceLevel,
  Product,
  Store,
  Supplier,
} from '@webpackages/entities';
import { Repository } from 'typeorm';
import {
  getBuiltinCategories,
  getBuiltinPriceLevels,
  getBuiltinProducts,
  getBuiltinStores,
  getBuiltinSuppliers,
} from '@webpackages/data';
@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Supplier, PriceLevel, Store, Product]),
  ],
})
export class AppSeedModule {
  protected readonly logger = new Logger('AppSeedModule');
  constructor(
    @InjectRepository(Category)
    protected readonly category: Repository<Category>,
    @InjectRepository(Supplier)
    protected readonly supplier: Repository<Supplier>,
    @InjectRepository(PriceLevel)
    protected readonly priceLevel: Repository<PriceLevel>,
    @InjectRepository(Store)
    protected readonly store: Repository<Store>,
    @InjectRepository(Product)
    protected readonly product: Repository<Product>
  ) {}

  onModuleInit() {
    for (const i of getBuiltinCategories()) {
      try {
        this.category.save(i, { transaction: false });
      } catch (err) {
        this.logger.debug(i, ' : Not Saved');
      }
    }
    for (const i of getBuiltinSuppliers()) {
      try {
        this.supplier.save(i, { transaction: false });
      } catch (err) {
        this.logger.debug(i, ' : Not Saved');
      }
    }
    for (const i of getBuiltinSuppliers()) {
      try {
        this.supplier.save(i, { transaction: false });
      } catch (err) {
        this.logger.debug(i, ' : Not Saved');
      }
    }
    for (const i of getBuiltinPriceLevels()) {
      try {
        this.priceLevel.save(i, { transaction: false });
      } catch (err) {
        this.logger.debug(i, ' : Not Saved');
      }
    }
    for (const i of getBuiltinStores()) {
      try {
        this.store.save(i, { transaction: false });
      } catch (err) {
        this.logger.debug(i, ' : Not Saved');
      }
    }
    for (const i of getBuiltinProducts()) {
      try {
        this.product.save(i, { transaction: false });
      } catch (err) {
        this.logger.debug(i, ' : Not Saved');
      }
    }
  }
}
