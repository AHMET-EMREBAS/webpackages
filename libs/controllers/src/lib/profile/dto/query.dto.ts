import { ProfileView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryProfileDto
  extends BaseQueryDto
  implements QueryDto<ProfileView>
{
  @QueryProperty() firstName: string;
  @QueryProperty() lastName: string;
  @QueryProperty() middleName: string;
}
