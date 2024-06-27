import { Module, OnModuleInit } from '@nestjs/common';
import { ClockController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Clock, ClockView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { ClockService } from './service';
import { User, UserView } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Clock, ClockView, User, UserView])],
  controllers: [ClockController],
  providers: [ClockService],
})
export class ClockModule implements OnModuleInit {
  constructor(
    @InjectRepository(Clock) protected readonly repo: Repository<Clock>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
