import { Module, OnModuleInit } from '@nestjs/common';
import { MessageController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Message, MessageView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { MessageService } from './service';
import { User, UserView } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Message, MessageView, User, UserView])],
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
