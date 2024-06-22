import { TaskView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchTaskDto implements SearchDto<TaskView> {
  @SearchProperty<Task>([
    'name',
    'description',
    'tags',
    'dueDate',
    'startDate',
    'endDate',
    'status',
    'difficulty',
    'username',
  ])
  search: FindOptionsWhere<Task>;
}
