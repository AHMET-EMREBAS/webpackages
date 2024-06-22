import { Module, OnModuleInit } from '@nestjs/common';
import { ProductController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Product, ProductView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { ProductService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductView])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule implements OnModuleInit {
  constructor(
    @InjectRepository(Product) protected readonly repo: Repository<Product>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
