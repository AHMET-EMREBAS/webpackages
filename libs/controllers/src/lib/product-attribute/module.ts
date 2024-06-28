import { Module, OnModuleInit } from '@nestjs/common';
import { ProductAttributeController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { ProductAttribute, ProductAttributeView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { ProductAttributeService } from './service';
import { Product, ProductView } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductAttribute,
      ProductAttributeView,
      Product,
      ProductView,
    ]),
  ],
  controllers: [ProductAttributeController],
  providers: [ProductAttributeService],
})
export class ProductAttributeModule implements OnModuleInit {
  constructor(
    @InjectRepository(ProductAttribute)
    protected readonly repo: Repository<ProductAttribute>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
