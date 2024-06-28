import { TaskView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderTaskDto extends CreateOrderDto<TaskView>([
  'name',
  'description',
  'tags',
  'difficulty',
  'status',
  'startDate',
  'endDate',
  'dueDate',
  'usersUsername',
]) {}
