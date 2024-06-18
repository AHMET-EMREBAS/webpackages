import { Module, OnModuleInit } from '@nestjs/common';
import { QuantityController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Quantity } from './entities';
import { Repository } from 'typeorm';
import { QuantityService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Quantity])],
  controllers: [QuantityController],
  providers: [QuantityService],
})
export class QuantityModule implements OnModuleInit {
  constructor(
    @InjectRepository(Quantity) protected readonly repo: Repository<Quantity>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
