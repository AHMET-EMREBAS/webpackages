import { Task } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchTaskDto implements SearchDto<Task> {
  @SearchProperty<Task>([])
  search: FindOptionsWhere<Task>;
}
