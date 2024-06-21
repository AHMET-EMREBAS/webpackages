import { FindWhere, SearchDto, SearchProperty } from '@webpackages/query';
import { User } from './user.entity';
import { Exclude } from 'class-transformer';

@Exclude()
export class SearchUserDto implements SearchDto<User> {
  @SearchProperty<User>(['username'])
  search: FindWhere<User>;
}
