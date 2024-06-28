import { TaskView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryTaskDto extends BaseQueryDto implements QueryDto<TaskView> {
  @QueryProperty() name: string;
  @QueryProperty() description: string;
  @QueryProperty() tags: string;
  @QueryProperty() difficulty: string;
  @QueryProperty() status: string;
  @QueryProperty() startDate: string;
  @QueryProperty() endDate: string;
  @QueryProperty() dueDate: string;
  @QueryProperty() usersId: string;
  @QueryProperty() usersActive: string;
  @QueryProperty() usersUsername: string;
}
