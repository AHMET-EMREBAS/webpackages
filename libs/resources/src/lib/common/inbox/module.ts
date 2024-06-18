import { Module, OnModuleInit } from '@nestjs/common';
import { InboxController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Inbox } from './entities';
import { Repository } from 'typeorm';
import { InboxService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Inbox])],
  controllers: [InboxController],
  providers: [InboxService],
})
export class InboxModule implements OnModuleInit {
  constructor(
    @InjectRepository(Inbox) protected readonly repo: Repository<Inbox>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
