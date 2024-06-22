import { UserProfileView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryUserProfileDto
  extends BaseQueryDto
  implements QueryDto<UserProfileView>
{
  @QueryProperty() firstName: string;
  @QueryProperty() lastName: string;
  @QueryProperty() middleName: string;
  @QueryProperty() username: string;
}
