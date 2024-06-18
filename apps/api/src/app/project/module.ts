import { Module } from '@nestjs/common';
import { ProjectModule } from '@webpackages/resources/project';
import { SprintModule } from '@webpackages/resources/sprint';
import { TaskModule } from '@webpackages/resources/task';

@Module({
  imports: [ProjectModule, SprintModule, TaskModule],
})
export class ProjectManagementModule {}
