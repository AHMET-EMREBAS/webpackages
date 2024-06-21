import { Task } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderTaskDto extends CreateOrderDto<Task>([
  'name',
  'tags',
  'dueDate',
  'startDate',
  'endDate',
  'description',
  'status',
  'difficulty',
  'users',
]) {}