import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { User } from './entity';

@Exclude()
export class QueryUserDto extends BaseQueryDto implements QueryDto<User> {
  @QueryProperty() username: unknown;
  @QueryProperty() password: unknown;
}
