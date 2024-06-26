import { Module, OnModuleInit } from '@nestjs/common';
import { DiscountController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Discount, DiscountView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { DiscountService } from './service';
import { Sku, SkuView } from '@webpackages/entities';
import { PriceLevel, PriceLevelView } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Discount,
      DiscountView,
      Sku,
      SkuView,
      PriceLevel,
      PriceLevelView,
    ]),
  ],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule implements OnModuleInit {
  constructor(
    @InjectRepository(Discount) protected readonly repo: Repository<Discount>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
