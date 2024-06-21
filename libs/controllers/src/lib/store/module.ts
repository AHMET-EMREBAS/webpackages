import { Module, OnModuleInit } from '@nestjs/common';
import { StoreController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Store } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { StoreService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule implements OnModuleInit {
  constructor(
    @InjectRepository(Store) protected readonly repo: Repository<Store>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
