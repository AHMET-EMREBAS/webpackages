import { Module, OnModuleInit } from '@nestjs/common';
import { QuantityController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Quantity, QuantityView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { QuantityService } from './service';
import { Sku, SkuView } from '@webpackages/entities';
import { Store, StoreView } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Quantity,
      QuantityView,
      Sku,
      SkuView,
      Store,
      StoreView,
    ]),
  ],
  controllers: [QuantityController],
  providers: [QuantityService],
})
export class QuantityModule implements OnModuleInit {
  constructor(
    @InjectRepository(Quantity) protected readonly repo: Repository<Quantity>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
