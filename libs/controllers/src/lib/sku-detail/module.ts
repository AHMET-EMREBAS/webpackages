import { Module, OnModuleInit } from '@nestjs/common';
import { SkuDetailController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { SkuDetail } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { SkuDetailService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([SkuDetail])],
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
