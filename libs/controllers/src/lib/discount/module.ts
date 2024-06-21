import { Module, OnModuleInit } from '@nestjs/common';
import { DiscountController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Discount } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { DiscountService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Discount])],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule implements OnModuleInit {
  constructor(
    @InjectRepository(Discount) protected readonly repo: Repository<Discount>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
