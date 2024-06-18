import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Task } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchTaskDto implements SearchDto<Task> {
  @SearchProperty<Task>([
    'dueDate',
    'startDate',
    'endDate',
    'status',
    'assignees',
  ])
  search: FindOptionsWhere<Task>;
}
