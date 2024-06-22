import { Module, OnModuleInit } from '@nestjs/common';
import { ProductImgController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { ProductImg, ProductImgView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { ProductImgService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductImg, ProductImgView])],
  controllers: [ProductImgController],
  providers: [ProductImgService],
})
export class ProductImgModule implements OnModuleInit {
  constructor(
    @InjectRepository(ProductImg)
    protected readonly repo: Repository<ProductImg>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
