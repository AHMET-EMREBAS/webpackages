import { Module, OnModuleInit } from '@nestjs/common';
import { OrderController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Order, OrderView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { OrderService } from './service';
import { Sku } from '@webpackages/entities';
import { Cart } from '@webpackages/entities';
import { Discount } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderView, Sku, Cart, Discount])],
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
