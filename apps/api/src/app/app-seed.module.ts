import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import {
  Category,
  Department,
  PriceLevel,
  Product,
  Store,
  Supplier,
} from '@webpackages/entities';
import { Repository } from 'typeorm';
import {
  getBuiltinCategories,
  getBuiltinDepartments,
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
export class AppSeedModule implements OnModuleInit {
  protected readonly logger = new Logger('AppSeedModule');
  constructor(
    @InjectRepository(Category)
    protected readonly category: Repository<Category>,
    @InjectRepository(Department)
    protected readonly department: Repository<Department>,
    @InjectRepository(Supplier)
    protected readonly supplier: Repository<Supplier>,
    @InjectRepository(PriceLevel)
    protected readonly priceLevel: Repository<PriceLevel>,
    @InjectRepository(Store)
    protected readonly store: Repository<Store>,
    @InjectRepository(Product)
    protected readonly product: Repository<Product>
  ) {}

  async onModuleInit() {
    setTimeout(async () => {
      // Categories
      for (const i of getBuiltinCategories()) {
        try {
          const saved = await this.category.save(i);
          this.logger.debug(`Saving ${i.name}`);
          this.logger.debug(`Saved ID: ${saved.id}  name: ${i.name}  `);
        } catch (err) {
          this.logger.log(i, ' already exist.');
        }
      }

      // Suppliers
      for (const i of getBuiltinSuppliers()) {
        try {
          const saved = await this.supplier.save(i);
          this.logger.debug(`Saving ${i.name}`);
          this.logger.debug(`Saved ID: ${saved.id}  name: ${i.name}  `);
        } catch (err) {
          this.logger.log(i, ' already exist.');
        }
      }

      // Price Levels
      for (const i of getBuiltinPriceLevels()) {
        try {
          const saved = await this.priceLevel.save(i);
          this.logger.debug(`Saving ${i.name}`);
          this.logger.debug(`Saved ID: ${saved.id}  name: ${i.name}  `);
        } catch (err) {
          this.logger.log(i, ' already exist.');
        }
      }

      // Stores
      for (const i of getBuiltinStores()) {
        try {
          const saved = await this.store.save(i);
          this.logger.debug(`Saving ${i.name}`);
          this.logger.debug(`Saved ID: ${saved.id}  name: ${i.name}  `);
        } catch (err) {
          this.logger.log(i, ' already exist.');
        }
      }

      // Products
      for (const i of getBuiltinProducts()) {
        try {
          const saved = await this.product.save(i);
          this.logger.debug(`Saving ${i.name}`);
          this.logger.debug(`Saved ID: ${saved.id}  name: ${i.name}  `);
        } catch (err) {
          this.logger.log(i, ' already exist.');
        }
      }

      // Departments
      for (const i of getBuiltinDepartments()) {
        try {
          const saved = await this.department.save(i);
          this.logger.debug(`Saving ${i.name}`);
          this.logger.debug(`Saved ID: ${saved.id}  name: ${i.name}  `);
        } catch (err) {
          this.logger.log(i, ' already exist.');
        }
      }
    }, 5000);
  }
}
