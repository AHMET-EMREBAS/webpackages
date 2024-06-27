import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Task } from './task.entity';
import { TaskMetadata } from '@webpackages/metadata';

import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Task>(ds, Task, TaskMetadata);
  },
})
export class TaskView extends BaseView {
  @ViewColumn() name: string;
  @ViewColumn() description: string;
  @ViewColumn() tags: string[];
  @ViewColumn() dueDate: Date;
  @ViewColumn() startDate: Date;
  @ViewColumn() endDate: Date;
  @ViewColumn() status: string;
  @ViewColumn() difficulty: string;

  @ViewColumn() usersUsername: User['username'];
  @ViewColumn() usersId: User['id'];
  @ViewColumn() usersActive: User['active'];
}
