import { SprintView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySprintDto
  extends BaseQueryDto
  implements QueryDto<SprintView>
{
  @QueryProperty() name: string;
  @QueryProperty() description: string;
  @QueryProperty() name: string;
}
