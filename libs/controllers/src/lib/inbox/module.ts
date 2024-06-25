import { Module, OnModuleInit } from '@nestjs/common';
import { InboxController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Inbox, InboxView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InboxService } from './service';
import { User } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Inbox, InboxView, User])],
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
