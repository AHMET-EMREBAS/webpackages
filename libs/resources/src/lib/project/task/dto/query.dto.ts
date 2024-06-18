import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Task } from '../entities';

@Exclude()
export class QueryTaskDto extends BaseQueryDto implements QueryDto<Task> {
  @QueryProperty() name: string;
  @QueryProperty() description: string;
  @QueryProperty() dueDate: string;
  @QueryProperty() startDate: string;
  @QueryProperty() endDate: string;
  @QueryProperty() status: string;
  @QueryProperty() assignees: string;
}
