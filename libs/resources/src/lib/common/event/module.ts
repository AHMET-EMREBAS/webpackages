import { Module, OnModuleInit } from '@nestjs/common';
import { EventController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities';
import { Repository } from 'typeorm';
import { EventService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule implements OnModuleInit {
  constructor(
    @InjectRepository(Event) protected readonly repo: Repository<Event>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
