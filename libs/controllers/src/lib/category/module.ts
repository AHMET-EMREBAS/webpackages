import { Module, OnModuleInit } from '@nestjs/common';
import { CategoryController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Category, CategoryView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CategoryService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryView])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule implements OnModuleInit {
  constructor(
    @InjectRepository(Category) protected readonly repo: Repository<Category>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
