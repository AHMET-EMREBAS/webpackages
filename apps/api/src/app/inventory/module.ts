import { Module } from '@nestjs/common';
import { CategoryModule } from '@webpackages/resources/category';
import { StoreModule } from '@webpackages/resources/store';
import { DepartmentModule } from '@webpackages/resources/department';
import { PriceLevelModule } from '@webpackages/resources/price-level';
import { PriceModule } from '@webpackages/resources/price';
import { SkuModule } from '@webpackages/resources/sku';
import { CartModule } from '@webpackages/resources/cart';
import { DiscountModule } from '@webpackages/resources/discount';
import { OrderModule } from '@webpackages/resources/order';
import { QuantityModule } from '@webpackages/resources/quantity';

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
    DiscountModule,
    QuantityModule,
  ],
})
export class InventoryModule {}
