import { Module, OnModuleInit } from '@nestjs/common';
import { OrderController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { OrderService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
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
