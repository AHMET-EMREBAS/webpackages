import { Module, OnModuleInit } from '@nestjs/common';
import { PriceController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Price, PriceView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { PriceService } from './service';
import { Sku } from '@webpackages/entities';
import { PriceLevel } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Price, PriceView, Sku, PriceLevel])],
  controllers: [PriceController],
  providers: [PriceService],
})
export class PriceModule implements OnModuleInit {
  constructor(
    @InjectRepository(Price) protected readonly repo: Repository<Price>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
