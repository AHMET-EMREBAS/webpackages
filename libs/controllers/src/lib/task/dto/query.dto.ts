import { Task } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryTaskDto extends BaseQueryDto implements QueryDto<Task> {
  @QueryProperty() name: string;
  @QueryProperty() tags: string;
  @QueryProperty() dueDate: string;
  @QueryProperty() startDate: string;
  @QueryProperty() endDate: string;
  @QueryProperty() description: string;
  @QueryProperty() status: string;
  @QueryProperty() difficulty: string;
  @QueryProperty() users: string;
}
