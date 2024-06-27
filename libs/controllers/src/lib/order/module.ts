import { Module, OnModuleInit } from '@nestjs/common';
import { OrderController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Order, OrderView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { OrderService } from './service';
import { Sku, SkuView } from '@webpackages/entities';
import { Cart, CartView } from '@webpackages/entities';
import { Discount, DiscountView } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderView,
      Sku,
      SkuView,
      Cart,
      CartView,
      Discount,
      DiscountView,
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule implements OnModuleInit {
  constructor(
    @InjectRepository(Order) protected readonly repo: Repository<Order>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
