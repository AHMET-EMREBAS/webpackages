import { FindWhere, SearchDto, SearchProperty } from '@webpackages/query';
import { User } from './user.entity';
import { Dto } from '@webpackages/property';

@Dto()
export class SearchUserDto implements SearchDto<User> {
  @SearchProperty<User>(['username'])
  search: FindWhere<User>;
}
