import { Module } from '@nestjs/common';
import { CategoryModule } from '@webpackages/resources/category';
import { StoreModule } from '@webpackages/resources/store';
import { DepartmentModule } from '@webpackages/resources/department';
import { PriceLevelModule } from '@webpackages/resources/price-level';
import { PriceModule } from '@webpackages/resources/price';
import { CartModule } from '@webpackages/resources/cart';
import { SkuModule } from '@webpackages/resources/sku';

// import { DiscountModule } from '@webpackages/resources/discount';
import { OrderModule } from '@webpackages/resources/order';

@Module({
  imports: [
    CategoryModule,
    StoreModule,
    DepartmentModule,
    PriceLevelModule,
    PriceModule,
    CartModule,
    OrderModule,
    SkuModule,
    // DiscountModule
  ],
})
export class InventoryModule {}
