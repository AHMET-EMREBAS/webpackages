import { Module, OnModuleInit } from '@nestjs/common';
import { NotificationController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Notification, NotificationView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { NotificationService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Notification, NotificationView])],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule implements OnModuleInit {
  constructor(
    @InjectRepository(Notification)
    protected readonly repo: Repository<Notification>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
