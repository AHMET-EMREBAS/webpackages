import { User } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryUserDto extends BaseQueryDto implements QueryDto<User> {
  @QueryProperty() username: string;
  @QueryProperty() passwrod: string;
  @QueryProperty() permissions: string;
  @QueryProperty() department: string;
}
