import { UserEmail } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryUserEmailDto
  extends BaseQueryDto
  implements QueryDto<UserEmail>
{
  @QueryProperty() email: string;
  @QueryProperty() user: string;
}
