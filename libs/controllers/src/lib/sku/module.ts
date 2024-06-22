import { Module, OnModuleInit } from '@nestjs/common';
import { SkuController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Sku, SkuView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { SkuService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Sku, SkuView])],
  controllers: [SkuController],
  providers: [SkuService],
})
export class SkuModule implements OnModuleInit {
  constructor(
    @InjectRepository(Sku) protected readonly repo: Repository<Sku>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
