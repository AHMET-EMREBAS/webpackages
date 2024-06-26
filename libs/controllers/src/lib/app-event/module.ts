import { Module, OnModuleInit } from '@nestjs/common';
import { AppEventController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { AppEvent, AppEventView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { AppEventService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([AppEvent, AppEventView])],
  controllers: [AppEventController],
  providers: [AppEventService],
})
export class AppEventModule implements OnModuleInit {
  constructor(
    @InjectRepository(AppEvent) protected readonly repo: Repository<AppEvent>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
