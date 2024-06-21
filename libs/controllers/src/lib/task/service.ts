import { BaseEntityService } from '@webpackages/database';
import { Task } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService extends BaseEntityService<Task> {
  constructor(@InjectRepository(Task) repo: Repository<Task>) {
    super(repo);
  }
}
