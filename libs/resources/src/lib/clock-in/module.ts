import { Module, OnModuleInit } from '@nestjs/common';
import { ClockInController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { ClockIn } from './entities';
import { Repository } from 'typeorm';
import { ClockInService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([ClockIn])],
  controllers: [ClockInController],
  providers: [ClockInService],
})
export class ClockInModule implements OnModuleInit {
  constructor(
    @InjectRepository(ClockIn) protected readonly repo: Repository<ClockIn>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
