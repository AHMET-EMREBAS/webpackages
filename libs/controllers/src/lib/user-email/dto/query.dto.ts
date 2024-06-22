import { UserEmailView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryUserEmailDto
  extends BaseQueryDto
  implements QueryDto<UserEmailView>
{
  @QueryProperty() email: string;
  @QueryProperty() username: string;
}
