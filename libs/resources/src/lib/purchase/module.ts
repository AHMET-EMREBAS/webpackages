import { Module, OnModuleInit } from '@nestjs/common';
import { PurchaseController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './entities';
import { Repository } from 'typeorm';
import { PurchaseService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Purchase])],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule implements OnModuleInit {
  constructor(
    @InjectRepository(Purchase) protected readonly repo: Repository<Purchase>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
