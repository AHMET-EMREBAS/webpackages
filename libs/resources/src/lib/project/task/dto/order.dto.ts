import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Task } from '../entities';

@Exclude()
export class OrderTaskDto extends CreateOrderDto<Task>([
  'name',
  'description',
  'dueDate',
  'startDate',
  'endDate',
  'status',
  'assignees',
]) {}
