import { Module, OnModuleInit } from '@nestjs/common';
import { SaleController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Sale, SaleView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { SaleService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Sale, SaleView])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule implements OnModuleInit {
  constructor(
    @InjectRepository(Sale) protected readonly repo: Repository<Sale>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
