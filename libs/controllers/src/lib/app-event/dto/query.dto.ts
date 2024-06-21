import { AppEvent } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryAppEventDto
  extends BaseQueryDto
  implements QueryDto<AppEvent>
{
  @QueryProperty() name: string;
  @QueryProperty() payload: string;
}
