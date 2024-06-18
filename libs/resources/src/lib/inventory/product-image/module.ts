import { Module, OnModuleInit } from '@nestjs/common';
import { ProductImageController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { ProductImage } from './entities';
import { Repository } from 'typeorm';
import { ProductImageService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductImage])],
  controllers: [ProductImageController],
  providers: [ProductImageService],
})
export class ProductImageModule implements OnModuleInit {
  constructor(
    @InjectRepository(ProductImage)
    protected readonly repo: Repository<ProductImage>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
