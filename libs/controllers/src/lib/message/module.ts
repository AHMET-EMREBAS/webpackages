import { Module, OnModuleInit } from '@nestjs/common';
import { MessageController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { MessageService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule implements OnModuleInit {
  constructor(
    @InjectRepository(Message) protected readonly repo: Repository<Message>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
