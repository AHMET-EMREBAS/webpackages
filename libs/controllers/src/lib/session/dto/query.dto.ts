import { SessionView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySessionDto
  extends BaseQueryDto
  implements QueryDto<SessionView>
{
  @QueryProperty() deviceId: string;
  @QueryProperty() username: string;
}
