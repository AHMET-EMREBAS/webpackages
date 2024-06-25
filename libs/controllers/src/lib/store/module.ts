import { Module, OnModuleInit } from '@nestjs/common';
import { StoreController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Store, StoreView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { StoreService } from './service';
import { User } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Store, StoreView, User])],
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
