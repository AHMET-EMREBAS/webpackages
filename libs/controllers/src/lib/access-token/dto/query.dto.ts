import { AccessTokenView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryAccessTokenDto
  extends BaseQueryDto
  implements QueryDto<AccessTokenView>
{
  @QueryProperty() name: string;
  @QueryProperty() token: string;
  @QueryProperty() userId: string;
  @QueryProperty() userActive: string;
  @QueryProperty() userUsername: string;
}
