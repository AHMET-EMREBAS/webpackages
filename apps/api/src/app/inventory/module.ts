import { Module } from '@nestjs/common';
import {
  StoreModule,
  PriceLevelModule,
  PriceModule,
  SkuModule,
  CartModule,
  DiscountModule,
  OrderModule,
  QuantityModule,
  ProductModule,
  ProductImgModule,
  SerialNumberModule,
} from '@webpackages/resources/inventory';

import {
  CategoryModule,
  DepartmentModule,
} from '@webpackages/resources/common';

@Module({
  imports: [
    ProductModule,
    ProductImgModule,
    SerialNumberModule,
    StoreModule,
    PriceLevelModule,
    PriceModule,
    SkuModule,
    CartModule,
    DiscountModule,
    OrderModule,
    QuantityModule,
    CategoryModule,
    DepartmentModule,
  ],
})
export class InventoryModule {}
