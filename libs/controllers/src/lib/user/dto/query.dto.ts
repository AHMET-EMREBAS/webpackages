import { UserView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryUserDto extends BaseQueryDto implements QueryDto<UserView> {
  @QueryProperty() username: string;
  @QueryProperty() password: string;
  @QueryProperty() permissions: string;
  @QueryProperty() departmentId: string;
  @QueryProperty() departmentActive: string;
  @QueryProperty() departmentName: string;
}
