import { Module } from '@nestjs/common';
import {
  ProjectModule,
  SprintModule,
  TaskModule,
} from '@webpackages/resources/project';

@Module({
  imports: [ProjectModule, SprintModule, TaskModule],
})
export class ProjectManagementModule {}
