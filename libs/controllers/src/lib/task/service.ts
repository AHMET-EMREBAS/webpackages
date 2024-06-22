import { BaseEntityService } from '@webpackages/database';
import { Task, TaskView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService extends BaseEntityService<Task, TaskView> {
  constructor(
    @InjectRepository(Task) repo: Repository<Task>,
    @InjectRepository(TaskView) view: Repository<TaskView>
  ) {
    super(repo, view);
  }
}
