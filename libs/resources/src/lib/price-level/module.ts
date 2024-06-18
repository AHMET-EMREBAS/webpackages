import { Module, OnModuleInit } from '@nestjs/common';
import { PriceLevelController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { PriceLevel } from './entities';
import { Repository } from 'typeorm';
import { PriceLevelService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([PriceLevel])],
  controllers: [PriceLevelController],
  providers: [PriceLevelService],
})
export class PriceLevelModule implements OnModuleInit {
  constructor(
    @InjectRepository(PriceLevel)
    protected readonly repo: Repository<PriceLevel>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
