import { Module } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import {
  Category,
  PriceLevel,
  Product,
  Store,
  Supplier,
  entityList,
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
  imports: [TypeOrmModule.forFeature([...entityList])],
  controllers: [],
})
export class AppSeedModule {
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
    this.category.save(getBuiltinCategories(), { transaction: false });
    this.supplier.save(getBuiltinSuppliers(), { transaction: false });
    this.supplier.save(getBuiltinSuppliers(), { transaction: false });
    this.priceLevel.save(getBuiltinPriceLevels(), { transaction: false });
    this.store.save(getBuiltinStores(), { transaction: false });
    this.product.save(getBuiltinProducts(), { transaction: false });
  }
}
