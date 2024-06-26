import { Module, OnModuleInit } from '@nestjs/common';
import { SkuDetailController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { SkuDetail, SkuDetailView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { SkuDetailService } from './service';
import { Sku, SkuView } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([SkuDetail, SkuDetailView, Sku, SkuView])],
  controllers: [SkuDetailController],
  providers: [SkuDetailService],
})
export class SkuDetailModule implements OnModuleInit {
  constructor(
    @InjectRepository(SkuDetail) protected readonly repo: Repository<SkuDetail>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
