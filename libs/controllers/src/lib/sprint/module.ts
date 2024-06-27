import { Module, OnModuleInit } from '@nestjs/common';
import { SprintController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Sprint, SprintView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { SprintService } from './service';
import { Project, ProjectView } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sprint, SprintView, Project, ProjectView]),
  ],
  controllers: [SprintController],
  providers: [SprintService],
})
export class SprintModule implements OnModuleInit {
  constructor(
    @InjectRepository(Sprint) protected readonly repo: Repository<Sprint>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
