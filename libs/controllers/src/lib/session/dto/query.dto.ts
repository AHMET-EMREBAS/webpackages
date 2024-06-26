import { SessionView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySessionDto
  extends BaseQueryDto
  implements QueryDto<SessionView>
{
  @QueryProperty() scope: string;
  @QueryProperty() deviceId: string;
  @QueryProperty() token: string;
  @QueryProperty() userId: string;
  @QueryProperty() userActive: string;
  @QueryProperty() userUsername: string;
}
