import { Module, OnModuleInit } from '@nestjs/common';
import { TaskController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Task, TaskView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { TaskService } from './service';
import { User, UserView } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskView, User, UserView])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule implements OnModuleInit {
  constructor(
    @InjectRepository(Task) protected readonly repo: Repository<Task>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
