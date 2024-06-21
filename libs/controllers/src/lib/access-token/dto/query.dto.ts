import { AccessToken } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryAccessTokenDto
  extends BaseQueryDto
  implements QueryDto<AccessToken>
{
  @QueryProperty() name: string;
  @QueryProperty() token: string;
  @QueryProperty() user: string;
}
